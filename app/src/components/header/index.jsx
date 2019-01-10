import React from 'react'

const logo =
  'data:image/png;base64,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'

const Header = props => {
  return (
    <div className="row">
      <div className="col-3">
        <img src={logo} alt="Logo here" width="150px" />
      </div>
      <div className="col">
        <h2 className="row">{props.banner}</h2>
        <h2 className="row">{'Stolen bykes'}</h2>
      </div>
    </div>
  )
}

export default Header
