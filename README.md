# ibex-react

```js
import Ibex from 'ibex';
import react from 'ibex-react';

const app = new Ibex();
react({
    View: View,
    initialData: window.__INITIAL_STATE__,
    element: document.getElementById('app'),
})(app);
```
