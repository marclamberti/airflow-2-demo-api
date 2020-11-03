import React from 'react'

export const Variables = ({variables, withDags, deleteVariable}) => {

    console.log('variables length:::', variables.length)
    if (variables.length === 0 || variables.total_entries === 0) return null

/*  {
        "total_entries": 1,
        "variables": [
          {
            "key": "my_var",
            "value": "test"
          }
        ]
    } */

    variables = variables['variables']

    const VariableRow = (variable, withDags, index) => {
        return(
              <tr key = {index} className={index%2 === 0?'odd':'even'}>
                  <td>{index + 1}</td>
                  <td>{variable.key}</td>
                  <td>{variable.value}</td>
                  <td>{(withDags !== null && variable.key in withDags) ? withDags[variable.key] : 'No associated DAGs'}</td>
                  <td><button type="button" className="btn btn-danger" onClick= {(e) => deleteVariable(variable.key)}>Delete</button></td>
              </tr>
          )
    }

    const variableTable = variables.map((variable,index) => VariableRow(variable, withDags, index))

    return(
        <div className="container">
            <h2>Variables</h2>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Key</th>
                    <th scope="col">Value</th>
                    <th scope="col">Used in DAGs</th>
                    <th scope="col">Actions</th>
                </tr>
                </thead>
                <tbody>
                    {variableTable}
                </tbody>
            </table>
        </div>
    )
}