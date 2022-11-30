Each webpack build is a container.

## ContainerPlugin (low level API)
This plugin creates an additional entry interface into the container exposing the specified modules.

## ContainerReferencePlugin (low level API)
- This plugin adds references for external modules in the current container. 
- And allows to import remote modules into the current container.
- It also calls the `override` api of these containers to provide [[overrides]] to them.
- Local [[overrides]] and specified [[overrides]] are provided to all referenced containers.

## ModuleFederationPlugin (high level API)
- This combines `ContainerPlugin` and `ContainerReferencePlugin` to achieve module federation.

