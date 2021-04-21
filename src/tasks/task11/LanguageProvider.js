import React from "react";

import "./css11/Task11.css";

const LanguageContext = React.createContext();
//const LanguageConsumer = LanguageContext.Consumer;

class LanguageProvider extends React.Component {
  state = {
    language: "french"
  };

  updateLanguage = e => this.setState({ language: e.target.value });

  render() {
    return (
      <LanguageContext.Provider
        value={{
          language: this.state.language,
          updateLanguage: this.updateLanguage
        }}
      >
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}

export default LanguageProvider;
