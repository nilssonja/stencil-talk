What are web components?

My words: In many cases when someone is refering to a web component, they are specifically talking about custom elements. They were created as a means to standardize the way developers can write their own custom elements along with their own logic. They were created with the browser in mind, not for the purpose of running in other frameworks. What cross compatability they have is because they are built on new browser APIs.

---

Why consider web components?

My words: When building your own component library, or if you are being asked to build one, one of many considerations need to be made. Some are:

1.) Who will be consuming your components? Is it one team, many teams, mix of internal teams and third party teams?
2.) What framework or frameworks are they using?
3.) How long will they be using their framework? Can they still use your components if they change?

Notice the reoccuring trend in asking and answering these questions. The word "Framework" continues to appear. Frameworks saturate the world of web development we live in today, so much so that it is difficult just keeping up with how many there are and their names alone. 

When choosing to build your component library as web components, you are in turn choosing the browser and the APIs it provides over what a singular framework provides. And, in turn, you are given the guarantee that your components will render in the browser regardless of what framework is rendering the consuming application.

---
Why NOT web components?

SSR
New Unfamiliar API
Manual component registration
No standardized testing strategy.

---

What is Stencil? 

It is a compiler and tool set for web components. Using their syntax and tools, your code is compiled to standardized web components with no dependencies that the browser understands.

What other options are out htere? list options.

Hybrids
LitElement
Polymer
Slim.js
Stencil
more...

Well with so many options, then why Stencil? List features:
 - Lazy-loading
    * Components are not included in your bundle, allowing for faster first-pain and less for the client to download.
 - JSX
 - Component Lifecycle
    * Those familiar with React will get a sense of deja-vu here. Many of the lifecycle methods you've come to love (or hate) are here. You may use them at your own risk, however, as unnecessary re-renders can occur if not used wisely.
 - SSR
 - Framework Bindings
    * Solves some compatability issues when using web componetns in certain Frameworks.
 - E2E testing with puppeteer
 - Visual Regression (screenshot) testing
    * While currently experimental, 
 - Doc Generation
 - Dynamic or Manual bundling
 - Theming Potential via lazy-loading.


Okay, then how to Stencil?

Go over stencil init CLI?

Go over stencil.config.ts?

Create Simple component and talk about:

Talk about what a decorator is.

- @Component
    * Each component must be decorated with @Component.
    * Takes an object to describe the component:
        - Tag: Sets the tag name of the component
        - styleUrl/styleUrls: path to css file, files, or key value pair towards css files.
        - shadow: Determines if the component will render in it's own shadow root.
- @Prop
    * Custom attributes and properties to expose on a component.
    * Accessed via `this`
    * Creates a JS property on the element object and listens for changes on the attribute equivilent.
    * Camel cased properties become dashed cased when used as attributes.
    * Can be set as mutable, where the internal logic of the component can change the prop.
- @State
- Lifecycle
- JSX
- Styling
  * Use themed stylesheet
- Unit and E2E testing : Helps test web components without manual setup.

Show component with npm start.

Show themed component:
- show global.ts script.

Show component working in React and Angular.

With basics done, show tab and/or todo component example.

Showcase it working in native html.

Showcase it working in Angular.

Showcase it NOT working in React.

Cover bindings output.

- show stencil.config.ts
- show output

Showcase it working in React with bindings.

Talk about other alternative output targets:

- SSR (No demo. but show output)
- Docs (Maybe demo?)
- 