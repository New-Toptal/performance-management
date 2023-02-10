import "./FlasSwitch.css";
import { useState } from 'react';

export default () => {
    const [isOn, setIsOn] = useState(false);
    return (
        <>
            <label className="flas-switch">
                <input type="checkbox" className="flas-switch-checkbox" checked={isOn} onChange={() => setIsOn(prev => !prev)} />
                <div className="flas-switch-button" />
                <div className="flas-switch-labels">
                    <span>GRAPH</span>
                    <span>TABLE</span>
                </div>
            </label>
        </>
    );
}