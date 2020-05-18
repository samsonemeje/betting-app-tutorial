import React, { Component } from "react";
import { BetContext } from "./BetContext";

class ChangeTheme extends Component {
    static contextType = BetContext;
    render() {
        const { changeTheme } = this.context;
        return (
            <div className="activate">
                <em>Click this <button onClick={changeTheme}> Theme Mode</button> button to toggle <em>Light Mode</em> and Dark Mode.</em>
            </div>
        );
    }
}

export default ChangeTheme;