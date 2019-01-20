import React, {Component} from 'react';
import {Pagination, Autocomplete, Input, Row} from "react-materialize";

class MaterializeTests extends Component {
    state = {
        checked: new Map()
    };
    handleSubmit = event => {
        const targetValue = event.target.value;
        const checked = event.target.checked;

        this.setState(prev => ({checked: prev.checked.set(targetValue, checked)}));
    };

    render = () => {
        return (
            <div>
                <Pagination items={10} activePage={2} maxButtons={8} onSelect={(event) => console.log(event)}/>
                <Autocomplete title="test" onChange={(event) => console.log(event.target.value)} data={
                    {
                        Freaya: 'https://kroliki.net/media/filer_public_thumbnails/filer_public/67/e2/67e2cacf-a3ce-4210-87e1-df369bb07c2b/fr2.jpg__800x600_q85_crop_subsampling-2.jpg',
                        Inka: null,

                    }} value={'Freaya'}/>
                <Input s={12} type='select' label='Materialize Select' icon='weekend' defaultValue='2'
                       onChange={(e) => console.log(e.target.value)}>
                    <option value='1'>Option 1</option>
                    <option value='2'>Option 2</option>
                    <option value='3'>Option 3</option>
                </Input>
                <Row>
                    <Input name='group1' checked type='checkbox' value='red' label='Red'
                           onChange={this.handleSubmit} on/>
                    <Input name='group1' checked={this.state.checked.get('yellow')} type='checkbox' value='yellow'
                           label='Yellow'
                           onChange={this.handleSubmit}/>
                    <Input name='group1' checked={this.state.checked.get('green')} type='checkbox' value='green'
                           label='Green' className='filled-in'
                           onChange={this.handleSubmit}/>
                    <Input name='group1' type='checkbox' value='brown' label='Brown' disabled='disabled'
                           onChange={(e) => console.log(e.target.value, e.target.checked)}/>
                </Row>
                <button onClick={() => console.log(this.state.checked)}>CLICK</button>
            </div>
        );
    };
}

export default MaterializeTests;