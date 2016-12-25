import React, {Component} from 'react';
import Input from './input/input';

class Form extends Component {
    render() {
        var inputList = this
            .props
            .inputTypeList
            .map((type) => <Input key={type.toString()} type={type} name={type}/>);

        return (
            <div>
                <form>
                    {inputList}
                </form>
            </div>
        );
    }
}

export default Form;