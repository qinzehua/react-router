import { pathToRegexp } from "path-to-regexp";
function mathcPath(pathname, options = {}) {
  const {
    path = "/",
    exact = false,
    strict = false,
    sensitive = false,
  } = options;

  const { keys, regexp } = compilePath(path, { end: exact, strict, sensitive });

  const match = regexp.exec(pathname);

  if (!match) {
    return null;
  }

  const [url, ...values] = match;
  const isExact = pathname === path;
  if (exact && !isExact) return null;

  return {
    path,
    url,
    isExact,
    params: keys.reduce((memo, key, index) => {
      memo[key.name] = values[index];
      return memo;
    }, {}),
  };
}

function compilePath(path, options) {
  const keys = [];
  const regexp = pathToRegexp(path, keys, options);
  return { keys, regexp };
}

export default mathcPath;
