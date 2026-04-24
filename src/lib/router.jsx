import { Children, createContext, useContext, useEffect, useMemo, useState } from 'react'

const RouterContext = createContext(null)
const ParamsContext = createContext({})
const OutletContext = createContext(null)

function normalizePath(path) {
  if (!path) return '/'
  if (path.length > 1 && path.endsWith('/')) return path.slice(0, -1)
  return path
}

function matchPath(pattern, pathname) {
  const normalizedPattern = normalizePath(pattern)
  const normalizedPathname = normalizePath(pathname)

  if (normalizedPattern === '*') {
    return { matched: true, params: {} }
  }

  const patternSegments = normalizedPattern.split('/').filter(Boolean)
  const pathSegments = normalizedPathname.split('/').filter(Boolean)

  if (patternSegments.length !== pathSegments.length) {
    return { matched: false, params: {} }
  }

  const params = {}

  for (let i = 0; i < patternSegments.length; i += 1) {
    const patternSegment = patternSegments[i]
    const pathSegment = pathSegments[i]

    if (patternSegment.startsWith(':')) {
      params[patternSegment.slice(1)] = decodeURIComponent(pathSegment)
      continue
    }

    if (patternSegment !== pathSegment) {
      return { matched: false, params: {} }
    }
  }

  return { matched: true, params }
}

function joinPaths(parentPath, childPath) {
  if (!childPath) return normalizePath(parentPath)
  if (childPath.startsWith('/')) return normalizePath(childPath)

  const normalizedParent = normalizePath(parentPath)

  if (normalizedParent === '/') {
    return normalizePath(`/${childPath}`)
  }

  return normalizePath(`${normalizedParent}/${childPath}`)
}

function createRouteBranches(routeElements, parentPath = '', parentRoutes = []) {
  const branches = []

  for (const routeElement of routeElements) {
    if (!routeElement?.props?.path) continue

    const fullPath = joinPaths(parentPath || '/', routeElement.props.path)
    const nextRoutes = [...parentRoutes, routeElement]
    const children = Children.toArray(routeElement.props.children)

    branches.push({ fullPath, routes: nextRoutes })

    if (children.length > 0) {
      branches.push(...createRouteBranches(children, fullPath, nextRoutes))
    }
  }

  return branches
}

export function BrowserRouter({ children }) {
  const [pathname, setPathname] = useState(() => normalizePath(window.location.pathname))

  useEffect(() => {
    const handlePopState = () => {
      setPathname(normalizePath(window.location.pathname))
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const navigate = (to, { replace = false } = {}) => {
    const nextPath = normalizePath(to)

    if (replace) {
      window.history.replaceState({}, '', nextPath)
    } else {
      window.history.pushState({}, '', nextPath)
    }

    setPathname(nextPath)
  }

  const value = useMemo(() => ({ pathname, navigate }), [pathname])

  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>
}

export function Routes({ children }) {
  const { pathname } = useRouterContext()
  const routeElements = Children.toArray(children)
  const branches = createRouteBranches(routeElements)

  for (const branch of branches) {
    const result = matchPath(branch.fullPath, pathname)

    if (!result.matched) continue

    let outlet = null

   for (let i = branch.routes.length - 1; i >= 0; i -= 1) {
      const currentRoute = branch.routes[i]

      outlet = <OutletContext.Provider value={outlet}>{currentRoute.props.element}</OutletContext.Provider>
    }

      return <ParamsContext.Provider value={result.params}>{outlet}</ParamsContext.Provider>
  }

  return null
}

export function Route() {
  return null
}

export function Outlet() {
  return useContext(OutletContext)
}

export function Navigate({ to, replace = false }) {
  const navigate = useNavigate()

  useEffect(() => {
    navigate(to, { replace })
  }, [navigate, replace, to])

  return null
}

export function Link({ to, children, onClick, ...props }) {
  const navigate = useNavigate()

  const handleClick = (event) => {
    onClick?.(event)
    
     if (event.defaultPrevented) {
      return
    }

    event.preventDefault()
    navigate(to)
  }

  return (
    <a href={to} onClick={handleClick} {...props}>
      {children}
    </a>
  )
}

function useRouterContext() {
  const context = useContext(RouterContext)
  if (!context) {
    throw new Error('Router hooks must be used within <BrowserRouter>.')
  }

  return context
}

export function useNavigate() {
  return useRouterContext().navigate
}

export function useLocation() {
  return { pathname: useRouterContext().pathname }
}

export function useParams() {
  return useContext(ParamsContext)
}