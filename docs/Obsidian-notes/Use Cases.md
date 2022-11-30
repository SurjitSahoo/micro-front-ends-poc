## Separate builds per page
- Each page of an SPA can be a separate container build. And the main application can just be a shell referencing all pages as remote modules.
- The main application will only need redeployment when page-routes needs to be changed or new routes needs to be added into the application.
- The main application can install commonly used libraries natively and chose to share for optimisation.

## Components Library as container
- All the common components can be put into a single container and exposed to be used by all the applications.
- Changes to the library components can be separately deployed and all the applications will get the updates instantly
- Although sharing states need to very carefully architected. 🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨



