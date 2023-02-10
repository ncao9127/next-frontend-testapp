import {Fragment, useEffect, useState} from 'react'
import {processHTML} from '@utilities/process-html'

interface Props {
	html: string,
	shiftHeadingLevel?: number,
}

const RehypeHTML: React.FC<Props> = ({html, shiftHeadingLevel}) => {
	const [Content, setContent] = useState(<Fragment />)
	useEffect(( ) => {
		// The only way we can use async operators in useEffect
		//  is to use an IIFE, which are void by definition.
		void (async ( ) => {
			const vFile = await processHTML(html, {shift: shiftHeadingLevel})
			setContent(vFile.result)
		})( )
	}, [html])

	// If its done, the Rehyped HTML is now ready to serve!
	// Otherwise it returns a temporary React Fragment.
	return <>{Content}</>
}

export {RehypeHTML}
