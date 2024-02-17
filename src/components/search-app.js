import React from "react";

class Searchapp extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }
    }

    isimler = ["Mehmet","Mustafa","Ahmet","Fatma","Ayşe","Ali","Hüseyin","Emine","Zeynep"];

    handleChange = (event) => {
        this.setState({value: event.target.value.toLowerCase()});
    }
    
    render() {
        const searchResponse = this.isimler.filter(text => text.toLowerCase().includes(this.state.value));
        return (
            <div className="area">
                <input id="searchbox" type="text" placeholder="Arama" onChange={this.handleChange}></input>
                <ul>
                    {searchResponse.map(text => (
                        <li>{text}</li>
                    ))}
                </ul>
                {searchResponse.length === 0 && <p>"{this.state.value}" İsimli kayıt bulunamadı.</p>}
            </div>
        );
    }
}

export default Searchapp