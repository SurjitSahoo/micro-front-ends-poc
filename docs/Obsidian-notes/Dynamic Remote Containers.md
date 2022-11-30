- Container interface supports `get` and `init` methods.
- `init()` is an `async` compatible method, that is called with one argument: _shared scope object_. 
- This object is used as a shared scope in the remote container and it is filled with modules & libraries provided from _host_ container.
- **It can be leveraged to connect to remote containers _dynamically at runtime_**.

### Issues?
- if the remotes have same file names and use same folder structure, then module from only one of the remotes loads, whichever was loaded first, the other module doesn't load
  e.g. `app1/src/routes.tsx` and `app2/src/routes.tsx` will cause problem.
- public folder assets not loading from remote.
- Remote app urls are not bookmark-able