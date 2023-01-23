import * as React from 'react'


export default function frequency() {
    const [frequence, setFrequence] = React.useState(false)
    const handleOnceChange = () => {
        setFrequence('Once');
    };
    const handleWeeklyChange = () => {
        setFrequence('Weekly');
    };
    const handleBiWeeklyChange = () => {
        setFrequence('BiWeekly');
    };

  return (
    <div>
        
    </div>
  )
}

