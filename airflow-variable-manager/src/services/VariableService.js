import * as Config from '../config/Config';

export async function getAllVariables() {

    const response = await fetch('/api/v1/variables', {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Basic ${btoa(Config.AIRFLOW_USER)}`
            }
        }
    );
    return await response.json();
}

export async function createVariable(data) {

    const response = await fetch(`/api/v1/variables`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Basic ${btoa(Config.AIRFLOW_USER)}`
        },
        body: JSON.stringify((({key, value}) => ({key, value}))(data))
      })
    return await response.json();
}

export async function deleteVariable(variableKey) {

    const response = await fetch(`/api/v1/variables/${variableKey}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Basic ${btoa(Config.AIRFLOW_USER)}`
            }
        }
    );
    return await response.text();
}