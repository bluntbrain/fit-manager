## **Code Guidelines**

### **General Principles**

1. **Naming Convention**: Use `PascalCase` for component names and `snake_case` for functions and variables.
2. **Functional Components**: Always use functional components.
3. **Limit Component Length**: Aim to keep components under 350 lines. If it exceeds, consider refactoring.
4. **Library Imports**: Place all library imports at the top, followed by a space, then your custom module imports.
5. **Props Ordering**: Define required props at the top, followed by optional props. Separate them with a space.
6. **No Inline Styles**: Avoid inline styles. If only one style is needed, consider refining the design to remove it.
7. **No Inline Functions**: Functions should be defined outside the component render method.
8. **Array Functions**: Always use Lodash library functions over native array functions.
9. **File & Folder Naming**: Follow a consistent naming convention and structure them based on features.
10. **Branch Naming**: Follow a structured format: `feat-{feature-name}`, `fix-{fix-name}`, and `chore-{chore-name}`.

### **State Management**

1. **State Declarations**: Declare states at the top of your component.
2. **Context API**: Utilize the Context API for state management.

### **Component Structure**

1. **Component Depth**: Maintain a flat component structure. Nested child components should not exceed 2 levels deep.
2. **Design Components**: Common design components should reside in "components/common" folder.
3. **Avoid JSX Variables**: Refrain from using JSX variables unless absolutely necessary.
4. **Logic & Styles**: If a component doesn't exceed 350 lines, keep its logic and styles within the same file.
5. **Component Folder Structure**:
   - `Feature Name` Folder
   - `Feature Name` File (Main logic)
   - Components Folder (For child components)
   - Styles
   - Helpers
   - Data Transformers

### **Libraries & Utilities**

1. **Safe Area**: Use `SafeAreaView` from `react-native-safe-area-context`.
2. **Text Components**: Import Text and other design components from `@the-source`.
3. **Touchables**: Use components from `react-native-gesture-handler` for touchables.
4. **Modal**: Prefer using the `Modal` component from `nativebase`.
5. **Images**: Use `FastImage` instead of the standard `Image` tag.

### **Merging & Pull Requests**

1. **Merge Strategy**: Adopt a "Squash and Merge" approach for feature/fix branches.
