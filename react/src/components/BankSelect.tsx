import banks from "nigerian-bank-icons/assets/banks.json"
import Select from 'react-select'


export default function BankSelect() {
    
    return <Select options={banks} />
}