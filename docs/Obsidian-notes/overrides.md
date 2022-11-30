When a container shares it's library (opts in to share its libraries), a different container can override the shared lib and use the lib from different container and/or with a different version.

## Libraries can be overridden in various scenarios
- When `requiredVersion` is not set, the highest version available will override all the lower versions.
- When `requiredVersion` is set, the highest acceptable version available will be used, overriding the lower versions.

[[Overrides]] are uni-directional. Two containers cannot override each other's modules/libs

