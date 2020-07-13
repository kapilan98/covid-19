import React from 'react'

function ComponentSearch({handleInput,search}){

return(

	<section className="searchbox-wrap">
	<input type="text" 
	className="searchbox"
	placeholder="Search a movie name..." 
	onChange={handleInput} 
	onKeyPress={search}/>
	</section>)

}
export default ComponentSearch