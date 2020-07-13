import React from 'react'

const Covid=({title})=>{

	return(
		<ol>
		{
			title.map(titl=>(
			<li>{title.data}</li>

				)

		)
	}
		</ol>


		)
}
export default Covid