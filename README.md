# Frontend Position Assignment

## Task Definition

In the scope of this task we suggest to implement the simple application drawer menu (See [example](https://mui.com/material-ui/react-drawer)). The main file (entrypoint) for that will be `src/appContainer/Menu.component.tsx`. Below you can find the set of requirements for the expected behavior.

#### Requirements:

- Menu should contain two routing links to the pages:
  - `/first`
  - `/second`
- Current (active) route link should be highlighted in red. // ✅
- Menu should become visible if triggered by hovering or clicking the `Menu` text (achor). // ✅
- Menu container should have transition animation when its being opened/closed. 
- In case user hovers over the anchor, menu should become visible.  // ✅
  It should stay visible only if the cursor is over this anchor or the menu container itself. If  // ✅
  user moves cursor out of this area, menu should be closed. // ✅
- In case user clicks the anchor, menu should open and stay visible. // ✅
  Another `Close` text should appear instead, which will allow user to close the menu. // ✅
- In case user hovers over the menu or already opened it and navigates to different pages by 
  clicking on the links inside the menu, menu should stay visible. //✅

As a next step, please consider adding unit tests for the things you find reasonable to test so that it covers the requirements described above.

Feel free to use any additional library to achieve the desired behavior, but note that routes structure should stay the same (meaning `AppRoutes.tsx` should stay untouched).

Pretty UI is not required, but encouraged :wink:

## Setup

To run the application:

```sh
# Install dependencies
npm i

# Run the dev server
npm run dev
```
