module.exports = /* eslint-disable */ [{"name":"EyeIcon","description":"SVG Eye Icon","code":"import React from 'react';\n\n/** SVG Eye Icon */\nfunction EyeIcon() {\n  // Attribution: Fabián Alexis at https://commons.wikimedia.org/wiki/File:Antu_view-preview.svg\n  return (\n    <svg width=\"32\" height=\"32\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 22 22\">\n      <g transform=\"matrix(.02146 0 0 .02146 1 1)\" fill=\"#4d4d4d\">\n        <path d=\"m466.07 161.53c-205.6 0-382.8 121.2-464.2 296.1-2.5 5.3-2.5 11.5 0 16.9 81.4 174.9 258.6 296.1 464.2 296.1 205.6 0 382.8-121.2 464.2-296.1 2.5-5.3 2.5-11.5 0-16.9-81.4-174.9-258.6-296.1-464.2-296.1m0 514.7c-116.1 0-210.1-94.1-210.1-210.1 0-116.1 94.1-210.1 210.1-210.1 116.1 0 210.1 94.1 210.1 210.1 0 116-94.1 210.1-210.1 210.1\" />\n        <circle cx=\"466.08\" cy=\"466.02\" r=\"134.5\" />\n      </g>\n    </svg>\n  )\n}\n\nexport default EyeIcon;\n","examples":[{"name":"Example","description":"","code":"import React from 'react';\nimport EyeIcon from 'r-components/EyeIcon';\n\nexport default function EyeIconExample() {\n  return <EyeIcon />;\n}\n"}]},{"name":"HelloWorld","description":"A component that says Hello with a custom message.","props":{"message":{"type":{"name":"string"},"required":false,"description":"Message to display","defaultValue":{"value":"'World'","computed":false}}},"code":"import React from 'react';\nimport PropTypes from 'prop-types';\n\n/** A component that says Hello with a custom message. */\nfunction HelloWorld({ message }) {\n  return <div>Hello {message}</div>\n}\n\nHelloWorld.propTypes = {\n  /** Message to display */\n  message: PropTypes.string\n};\n\nHelloWorld.defaultProps = {\n  message: 'World'\n};\n\nexport default HelloWorld;","examples":[{"name":"ExampleHelloWorld","description":"Custom message","code":"import React from 'react';\nimport HelloWorld from 'r-components/HelloWorld';\n\n/** Custom message */\nexport default function ExampleHelloWorld() {\n  return <HelloWorld message=\"React Component Library!\" />\n}\n"}]},{"name":"Label","description":"Label with required field display, htmlFor, and block styling","props":{"htmlFor":{"type":{"name":"string"},"required":true,"description":"HTML ID for associated input"},"label":{"type":{"name":"string"},"required":true,"description":"Label text"},"required":{"type":{"name":"bool"},"required":false,"description":"Display asterisk after label if true"}},"code":"import React from 'react';\nimport PropTypes from 'prop-types';\n\n/** Label with required field display, htmlFor, and block styling */\nfunction Label({ htmlFor, label, required }) {\n  return (\n    <label style={{ display: 'block' }} htmlFor={htmlFor}>\n      {label} {required && <span style={{ color: 'red' }}> *</span>}\n    </label>\n  )\n}\n\nLabel.propTypes = {\n  /** HTML ID for associated input */\n  htmlFor: PropTypes.string.isRequired,\n\n  /** Label text */\n  label: PropTypes.string.isRequired,\n\n  /** Display asterisk after label if true */\n  required: PropTypes.bool\n};\n\nexport default Label;\n","examples":[{"name":"ExampleOptional","description":"Optional label","code":"import React from 'react';\nimport Label from 'r-components/Label';\n\n/** Optional label */\nexport default function ExampleOptional() {\n  return <Label htmlFor=\"test\" label=\"test\" />\n}\n"},{"name":"ExampleRequired","description":"Required label","code":"import React from 'react';\nimport Label from 'r-components/Label';\n\n/** Required label */\nexport default function ExampleRequired() {\n  return <Label htmlFor=\"test\" label=\"test\" required />\n}\n"}]},{"name":"PasswordInput","description":"Password input with integrated label, quality tips, and show password toggle.","props":{"htmlId":{"type":{"name":"string"},"required":true,"description":"Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing."},"name":{"type":{"name":"string"},"required":true,"description":"Input name. Recommend setting this to match object's property so a single change handler can be used by convention."},"value":{"type":{"name":"any"},"required":false,"description":"Password value"},"label":{"type":{"name":"string"},"required":false,"description":"Input label","defaultValue":{"value":"'Password'","computed":false}},"onChange":{"type":{"name":"func"},"required":true,"description":"Function called when password input value changes"},"maxLength":{"type":{"name":"number"},"required":false,"description":"Max password length accepted","defaultValue":{"value":"50","computed":false}},"placeholder":{"type":{"name":"string"},"required":false,"description":"Placeholder displayed when no password is entered"},"showVisibilityToggle":{"type":{"name":"bool"},"required":false,"description":"Set to true to show the toggle for displaying the currently entered password","defaultValue":{"value":"false","computed":false}},"quality":{"type":{"name":"number"},"required":false,"description":"Display password quality visually via ProgressBar, accepts a number between 0 and 100"},"error":{"type":{"name":"string"},"required":false,"description":"Validation error to display"}},"code":"import React from 'react';\nimport PropTypes from 'prop-types';\nimport ProgressBar from '../ProgressBar';\nimport EyeIcon from '../EyeIcon';\nimport TextInput from '../TextInput';\n\n/** Password input with integrated label, quality tips, and show password toggle. */\nclass PasswordInput extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      showPassword: false\n    }\n  }\n\n  toggleShowPassword = event => {\n    this.setState(prevState => {\n      return { showPassword: !prevState.showPassword };\n    });\n    if (event) event.preventDefault();\n  }\n\n  render() {\n    const {\n      htmlId, value, label, error, onChange, placeholder, maxLength, showVisibilityToggle, quality, ...props\n    } = this.props;\n    const { showPassword } = this.state;\n\n    return (\n      <TextInput\n        htmlId={htmlId}\n        label={label}\n        placeholder={placeholder}\n        type={showPassword ? 'text' : 'password'}\n        onChange={onChange}\n        value={value}\n        maxLength={maxLength}\n        error={error}\n        required\n        {...props}>\n        {\n          showVisibilityToggle &&\n          <a\n            href=\"\"\n            onClick={this.toggleShowPassword}\n            style={{ marginLeft: 5 }}>\n            <EyeIcon />\n          </a>\n        }\n        {\n          value.length > 0 && quality && <ProgressBar percent={quality} width={130} />\n        }\n      </TextInput>\n    );\n  }\n}\n\nPasswordInput.propTypes = {\n  /** Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing. */\n  htmlId: PropTypes.string.isRequired,\n\n  /** Input name. Recommend setting this to match object's property so a single change handler can be used by convention.*/\n  name: PropTypes.string.isRequired,\n\n  /** Password value */\n  value: PropTypes.any,\n\n  /** Input label */\n  label: PropTypes.string,\n\n  /** Function called when password input value changes */\n  onChange: PropTypes.func.isRequired,\n\n  /** Max password length accepted */\n  maxLength: PropTypes.number,\n\n  /** Placeholder displayed when no password is entered */\n  placeholder: PropTypes.string,\n\n  /** Set to true to show the toggle for displaying the currently entered password */\n  showVisibilityToggle: PropTypes.bool,\n\n  /** Display password quality visually via ProgressBar, accepts a number between 0 and 100 */\n  quality: PropTypes.number,\n\n  /** Validation error to display */\n  error: PropTypes.string\n};\n\nPasswordInput.defaultProps = {\n  maxLength: 50,\n  showVisibilityToggle: false,\n  label: 'Password'\n};\n\nexport default PasswordInput;\n","examples":[{"name":"ExampleAllFeatures","description":"All features enabled","code":"import React from 'react';\nimport PasswordInput from 'r-components/PasswordInput';\n\n/** All features enabled */\nclass ExampleAllFeatures extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      password: ''\n    };\n  }\n\n  getQuality() {\n    const length = this.state.password.length;\n    return length > 10 ? 100 : length * 10;\n  }\n\n  render() {\n    return (\n      <div>\n        <PasswordInput\n          htmlId=\"password-input-example-all-features\"\n          name=\"password\"\n          onChange={event => this.setState({ password: event.target.value })}\n          value={this.state.password}\n          minLength={8}\n          placeholder=\"Enter password\"\n          showVisibilityToggle\n          quality={this.getQuality()}\n          {...this.props} />\n      </div>\n    )\n  }\n}\n\nexport default ExampleAllFeatures;\n"}]},{"name":"PersonIcon","description":"SVG Person Icon","code":"import React from 'react';\n\n/** SVG Person Icon */\nfunction PersonIcon() {\n  return (\n    <svg width=\"32\" height=\"32\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\">\n      <path\n        d=\"m17.466 16.914c-.159-.052-1.164-.505-.536-2.414h-.009c1.637-1.686 2.888-4.399 2.888-7.07 0-4.107-2.731-6.26-5.905-6.26-3.176 0-5.892 2.152-5.892 6.26 0 2.682 1.244 5.406 2.891 7.088.642 1.684-.506 2.309-.746 2.396-2.238.724-8.325 4.332-8.229 9.586h24.05c.107-5.02-4.708-8.279-8.513-9.586m19.943463-3.079141a23.455896 23.455898 0 0 1 -23.455894 23.455898 23.455896 23.455898 0 0 1 -23.455896 -23.455898 23.455896 23.455898 0 0 1 23.455896 -23.455898 23.455896 23.455898 0 0 1 23.455894 23.455898\"\n        fill=\"#4d4d4d\" transform=\"matrix(.34107 0 0 .34107 7.23 7.278)\" />\n    </svg>\n  )\n}\n\nexport default PersonIcon;\n","examples":[{"name":"Example","description":"","code":"import React from 'react';\nimport PersonIcon from 'r-components/PersonIcon';\n\nexport default function PersonIconExample() {\n  return <PersonIcon />;\n}\n"}]},{"name":"ProgressBar","description":"","props":{"percent":{"type":{"name":"number"},"required":true,"description":"Percent of progress completed"},"width":{"type":{"name":"number"},"required":true,"description":"Bar width"},"height":{"type":{"name":"number"},"required":false,"description":"Bar height","defaultValue":{"value":"5","computed":false}}},"code":"import React from 'react';\nimport PropTypes from 'prop-types';\n\nclass ProgressBar extends React.Component {\n  getColor = (percent) => {\n    if (percent === 100) return 'green';\n    return percent > 50 ? 'lightgreen' : 'red';\n  }\n\n  getWidthAsPercentOfTotalWidth = () => {\n    return parseInt(this.props.width * (this.props.percent / 100), 10);\n  }\n\n  render() {\n    const { percent, width, height } = this.props;\n    return (\n      <div style={{ border: 'solid 1px lightgray', width: width }}>\n        <div style={{\n          width: this.getWidthAsPercentOfTotalWidth(),\n          height,\n          backgroundColor: this.getColor(percent)\n        }} />\n      </div>\n    );\n  }\n}\n\nProgressBar.propTypes = {\n  /** Percent of progress completed */\n  percent: PropTypes.number.isRequired,\n\n  /** Bar width */\n  width: PropTypes.number.isRequired,\n\n  /** Bar height */\n  height: PropTypes.number\n};\n\nProgressBar.defaultProps = {\n  height: 5\n};\n\nexport default ProgressBar;","examples":[{"name":"Example100Percent","description":"100% progress and height 20px","code":"import React from 'react';\nimport ProgressBar from 'r-components/ProgressBar';\n\n/** 100% progress and height 20px */\nexport default function Example100Percent() {\n  return <ProgressBar percent={100} width={150} height={20} />\n}\n"},{"name":"Example10Percent","description":"10% progress","code":"import React from 'react';\nimport ProgressBar from 'r-components/ProgressBar';\n\n/** 10% progress */\nexport default function Example10Percent() {\n  return <ProgressBar percent={10} width={150} />\n}\n"},{"name":"Example70Percent","description":"70% progress","code":"import React from 'react';\nimport ProgressBar from 'r-components/ProgressBar';\n\n/** 70% progress */\nexport default function Example70Percent() {\n  return <ProgressBar percent={70} width={150} />\n}\n"}]},{"name":"TextInput","description":"Text input with integrated label to enforce consistency in layout, error display, label placement, and required field marker.","props":{"htmlId":{"type":{"name":"string"},"required":true,"description":"Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing."},"name":{"type":{"name":"string"},"required":true,"description":"Input name. Recommend setting this to match object's property so a single change handler can be used."},"label":{"type":{"name":"string"},"required":true,"description":"Input label"},"type":{"type":{"name":"enum","value":[{"value":"'text'","computed":false},{"value":"'number'","computed":false},{"value":"'password'","computed":false}]},"required":false,"description":"Input type","defaultValue":{"value":"\"text\"","computed":false}},"required":{"type":{"name":"bool"},"required":false,"description":"Mark label with asterisk if set to true","defaultValue":{"value":"false","computed":false}},"onChange":{"type":{"name":"func"},"required":true,"description":"Function to call onChange"},"placeholder":{"type":{"name":"string"},"required":false,"description":"Placeholder to display when empty"},"value":{"type":{"name":"any"},"required":false,"description":"Value"},"error":{"type":{"name":"string"},"required":false,"description":"String to display when error occurs"},"children":{"type":{"name":"node"},"required":false,"description":"Child component to display next to the input"}},"code":"import React from 'react';\nimport PropTypes from 'prop-types';\nimport Label from '../Label';\n\n/** Text input with integrated label to enforce consistency in layout, error display, label placement, and required field marker. */\nfunction TextInput({\n  htmlId, name, label, type = \"text\", required = false, onChange, placeholder, value, error, children, ...props }) {\n  return (\n    <div style={{ marginBottom: 16 }}>\n      <Label htmlFor={htmlId} label={label} required={required} />\n      <input\n        id={htmlId}\n        type={type}\n        name={name}\n        placeholder={placeholder}\n        value={value}\n        onChange={onChange}\n        style={error && { border: 'solid 1px red' }}\n        {...props} />\n      {children}\n      {error && <div className=\"error\" style={{ color: 'red' }}>{error}</div>}\n    </div>\n  );\n};\n\nTextInput.propTypes = {\n  /** Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing. */\n  htmlId: PropTypes.string.isRequired,\n\n  /** Input name. Recommend setting this to match object's property so a single change handler can be used. */\n  name: PropTypes.string.isRequired,\n\n  /** Input label */\n  label: PropTypes.string.isRequired,\n\n  /** Input type */\n  type: PropTypes.oneOf(['text', 'number', 'password']),\n\n  /** Mark label with asterisk if set to true */\n  required: PropTypes.bool,\n\n  /** Function to call onChange */\n  onChange: PropTypes.func.isRequired,\n\n  /** Placeholder to display when empty */\n  placeholder: PropTypes.string,\n\n  /** Value */\n  value: PropTypes.any,\n\n  /** String to display when error occurs */\n  error: PropTypes.string,\n\n  /** Child component to display next to the input */\n  children: PropTypes.node\n};\n\nexport default TextInput;\n","examples":[{"name":"ExampleError","description":"Required TextBox with error","code":"import React from 'react';\nimport TextInput from 'r-components/TextInput';\n\n/** Required TextBox with error */\nexport default class ExampleError extends React.Component {\n  render() {\n    return (\n      <TextInput\n        htmlId=\"example-optional\"\n        label=\"First Name\"\n        name=\"firstname\"\n        onChange={() => { }}\n        required\n        error=\"First name is required.\"\n      />\n    )\n  }\n}\n"},{"name":"ExampleOptional","description":"Optional TextBox","code":"import React from 'react';\nimport TextInput from 'r-components/TextInput';\n\n/** Optional TextBox */\nexport default class ExampleOptional extends React.Component {\n  render() {\n    return (\n      <TextInput\n        htmlId=\"example-optional\"\n        label=\"First Name\"\n        name=\"firstname\"\n        onChange={() => { }}\n      />\n    )\n  }\n}\n"}]}]