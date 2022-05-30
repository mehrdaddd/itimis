import React, {useState} from 'react';
import Button from '../Button/button'

const defaultData = {
    productName: "",
    number: "",
    price: "",
    taxRate: 10,
    imported: false,
}

const AddProduct = props => {
    const [data, setData] = useState(defaultData);
    const onChangeData = el => setData({...data, [el.target.name]: el.target.value})
    const onChangeImport = el => setData({...data, [el.target.name]: el.target.checked});
    const onSubmit = el => {
        el.preventDefault();
        props.addBasket(data)
        setData(defaultData);
    }

    return (
        <form className="app-container" onSubmit={onSubmit}>
            <h1> Add Product </h1>
            <input aria-label="productName" name="productName" className="form-field-style form-field-fullwidth"
                   placeholder="Product Name"
                   value={data.productName} required onChange={onChangeData}/>
            <select name="taxRate" className="form-field-style form-field-split" onChange={onChangeData}>
                <option value={10}> Goods </option>
                <option value={0}> Medical Products </option>
                <option value={0}> Books </option>
                <option value={0}> Food </option>
            </select>
            <input aria-label="number" type="number" name="number" placeholder="Number of the Product: 1"
                   className="form-field-style form-field-split" min="0" value={data.number}
                   onChange={onChangeData}/>
            <div>
                <input aria-label="price" type="number" name="price" placeholder="Price" className="form-field-style form-field-split" value={data.price} required onChange={onChangeData}/>
            </div>
            <div className="padding"> Is the product imported ? <input aria-label="imported" type="checkbox" name="imported" checked={data.imported} onChange={onChangeImport}/>
            </div>
            <button type="submit"> Add to Basket </button>
            <Button type="reset" onClick={() => setData(defaultData)}> Reset </Button>
        </form>
    )
}


export default AddProduct
