# Echo-UI

A React UI library.

## Button

### Import

```javascript
import { Button } from 'echo-ui/components/Button';
```

### Component Name

The name **_echo-btn_** can be used to provide style overrides.

### Props

| Name        | Type     | Default              | Description                                            |
| ----------- | -------- | -------------------- | ------------------------------------------------------ |
| `label`     | string   | 'Submit'             | Label of the component, the text inside the button.    |
| `className` | string   |                      | Override or extend css applied to the component.       |
| `onclick`   | function |                      | Function to be executed when the component is clicked. |
| `disabled`  | bool     | false                | if **true**, the button will be disabled.              |
| `bg`        | string   | 'white'              | Background color of the component.                     |
| `color`     | string   | 'rgba(0, 0, 0, 0.7)' | Text color of the component.                           |

## Input

_In production_
