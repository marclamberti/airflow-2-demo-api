import React from 'react'


const CreateVariable = ({onChangeForm, createVariable }) => {


    return(
        <div className="container">
            <div className="row">
                <div className="col-md-7 mrgnbtm">
                <h2>Create Variable</h2>
                <form>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="variableKey">Key</label>
                            <input type="text" onChange={(e) => onChangeForm(e)}  className="form-control" name="key" id="key" aria-describedby="emailHelp" placeholder="Key" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-12">
                            <label htmlFor="variableValue">Value</label>
                            <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="value" id="value" aria-describedby="emailHelp" placeholder="Value" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-12">
                            <label htmlFor="variableDAGs">Used in DAGs</label>
                            <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="dags" id="dags" aria-describedby="emailHelp" placeholder="MyDag,MyOtherDag" />
                        </div>
                    </div>
                    <button type="button" onClick= {(e) => createVariable()} className="btn btn-success">Create</button>
                </form>
                </div>
            </div>
        </div>
    )
}

export default CreateVariable