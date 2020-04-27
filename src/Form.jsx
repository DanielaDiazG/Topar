import React from "react"
import { css } from '@emotion/core'

function Form() {
    const estilosFormulario=css`
    display: flex;
    flex-direction: column;
    width: 25%;
    `;

    return(
    <div>
        <form css={estilosFormulario}>
            <label htmlFor="name">Name:</label>
            <input  id="name" type="text" />
            <input type="submit" value="Enviar" />
        </form>
    </div>)
    
}
export default Form