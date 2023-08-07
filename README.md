# Nigerian Bank Select
A Vue select component for your users to select nigerian banks with their logos

## Installation
To install run:
```bash
    npm i nigerian-bank-select
```

### Usage
First off, import the BankSelect component and the css
```vue
<script setup lang="ts">
    import { BankSelect } from "nigerian-bank-select"
    import "nigerian-bank-select/style.css"
</script>
```

now you can add the component to your template. It emits a 'on-select' event when an option is clicked

```vue
    <BankSelect @on-select="handleSelect" />
```

and you can handle the event like so:

```vue
<script setup lang="ts">
import { ref } from "vue"

const selected = ref(null)

const handleSelect = (nVal: any) => {
    selected.value = nVal
}
</script>
```