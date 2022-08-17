import * as React from 'react';

export interface AppProps {
 text: string;
}

export const SubApp = (props: AppProps) => {
 const { text } = props;
  return(
    <div>
      {text}
    </div>
  )
}


export const App = () => {
  const [stateText, setStateText] = React.useState('')
  return (
    <div>
      <SubApp text={stateText} />
    </div>
  )
}