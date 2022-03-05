import * as React from "react";
import * as ReactDOM from "react-dom";
import BootstrapSwitchButton from "../../lib/bootstrap-switch-button-react";

// App Container
const AppMain: React.SFC<{ compiler: string; framework: string }> = props => {
  let demosSizes: JSX.Element = (
    <div>
      <h3 className="text-secondary mt-4">Sizes</h3>
      <p>Bootstrap Switch Button is available in different sizes.</p>
      <div className="row">
        <div className="col p-3 bg-white border">
          <BootstrapSwitchButton checked={true} size="lg" />
          <BootstrapSwitchButton checked={true} />
          <BootstrapSwitchButton checked={true} size="sm" />
          <BootstrapSwitchButton checked={true} size="xs" />
        </div>
      </div>
      <div className="row">
        <div className="col p-0">
          <pre>
            <code className="language-typescript">
              {`<BootstrapSwitchButton checked={true} size="lg" />
<BootstrapSwitchButton checked={true} />
<BootstrapSwitchButton checked={true} size="sm" />
<BootstrapSwitchButton checked={true} size="xs" />`}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );

  let demosCustomSizes: JSX.Element = (
    <div>
      <h3 className="text-secondary mt-4">Custom Sizes</h3>
      <div>
        <p>
          Bootstrap Switch Button can handle custom sizes using{" "}
          <code>width</code> and <code>height</code> props.
        </p>
        <div className="row">
          <div className="col p-3 bg-white border">
            <BootstrapSwitchButton checked={true} width={100} height={75} />
            <BootstrapSwitchButton checked={true} height={75} />
            <BootstrapSwitchButton checked={true} width={100} />
          </div>
        </div>
        <div className="row">
          <div className="col p-0">
            <pre>
              <code className="language-typescript">
                {`<BootstrapSwitchButton checked={true} width={100} height={75} />
<BootstrapSwitchButton checked={true} height={75} />
<BootstrapSwitchButton checked={true} width={100} />`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );

  let demosColors: JSX.Element = (
    <div>
      <h3 className="text-secondary mt-4">Colors</h3>
      <p>Available in all standard bootstrap 4 button colors.</p>
      <div className="row">
        <div className="col p-3 bg-white border">
          <BootstrapSwitchButton
            checked={true}
            styleOn="primary"
            styleOff="info"
          />
          <BootstrapSwitchButton checked={true} styleOn="secondary" />
          <BootstrapSwitchButton checked={true} styleOn="success" />
          <BootstrapSwitchButton checked={true} styleOn="danger" />
          <BootstrapSwitchButton checked={true} styleOn="warning" />
          <BootstrapSwitchButton checked={true} styleOn="info" />
          <BootstrapSwitchButton checked={true} styleOn="light" />
          <BootstrapSwitchButton checked={true} styleOn="dark" />
        </div>
      </div>
      <div className="row">
        <div className="col p-0">
          <pre>
            <code className="language-typescript">
              {`<BootstrapSwitchButton checked={true} styleOn="primary" styleOff="info" />
<BootstrapSwitchButton checked={true} styleOn="secondary" />
<BootstrapSwitchButton checked={true} styleOn="success" />
<BootstrapSwitchButton checked={true} styleOn="danger" />
<BootstrapSwitchButton checked={true} styleOn="warning" />
<BootstrapSwitchButton checked={true} styleOn="info" />
<BootstrapSwitchButton checked={true} styleOn="light" />
<BootstrapSwitchButton checked={true} styleOn="dark" />`}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );

  let demosOutlineColors: JSX.Element = (
    <div>
      <h3 className="text-secondary mt-4">Outline Colors</h3>
      <p>Available in all standard bootstrap 4 button outline colors.</p>
      <div className="row">
        <div className="col p-3 bg-white border">
          <BootstrapSwitchButton
            checked={true}
            styleOn="outline-primary"
            styleOff="outline-secondary"
          />
          <BootstrapSwitchButton
            checked={true}
            styleOn="outline-secondary"
            styleOff="outline-success"
          />
          <BootstrapSwitchButton
            checked={true}
            styleOn="outline-success"
            styleOff="outline-danger"
          />
          <BootstrapSwitchButton
            checked={true}
            styleOn="outline-danger"
            styleOff="outline-warning"
          />
          <BootstrapSwitchButton
            checked={true}
            styleOn="outline-warning"
            styleOff="outline-info"
          />
          <BootstrapSwitchButton
            checked={true}
            styleOn="outline-info"
            styleOff="outline-primary"
          />
          <BootstrapSwitchButton
            checked={true}
            styleOn="outline-light"
            styleOff="outline-dark"
            className="border"
          />
          <BootstrapSwitchButton
            checked={true}
            styleOn="outline-dark"
            styleOff="outline-light"
            className="border"
          />
        </div>
      </div>
      <div className="row">
        <div className="col p-0">
          <pre>
            <code className="language-typescript">
              {`<BootstrapSwitchButton checked={true} styleOn="outline-primary" styleOff="outline-secondary"/>
<BootstrapSwitchButton checked={true} styleOn="outline-secondary" styleOff="outline-success"/>
<BootstrapSwitchButton checked={true} styleOn="outline-success" styleOff="outline-danger"/>
<BootstrapSwitchButton checked={true} styleOn="outline-danger" styleOff="outline-warning"/>
<BootstrapSwitchButton checked={true} styleOn="outline-warning" styleOff="outline-info"/>
<BootstrapSwitchButton checked={true} styleOn="outline-info" styleOff="outline-primary"/>
<BootstrapSwitchButton checked={true} styleOn="outline-light" styleOff="outline-dark" className="border" />
<BootstrapSwitchButton checked={true} styleOn="outline-dark" styleOff="outline-light" className="border"/>`}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );

  let demosDarkColors: JSX.Element = (
    <div>
      <h3 className="text-secondary mt-4">Dark Theme Colors</h3>
      <p>Standard colors look great on dark backgrounds.</p>
      <div className="row">
        <div className="col p-3 bg-dark border">
          <BootstrapSwitchButton checked={true} styleOn="primary" />
          <BootstrapSwitchButton checked={true} styleOn="secondary" />
          <BootstrapSwitchButton checked={true} styleOn="success" />
          <BootstrapSwitchButton checked={true} styleOn="danger" />
          <BootstrapSwitchButton checked={true} styleOn="warning" />
          <BootstrapSwitchButton checked={true} styleOn="info" />
          <BootstrapSwitchButton
            checked={true}
            styleOn="light"
            styleOff="dark"
            className="border"
          />
          <BootstrapSwitchButton
            checked={true}
            styleOn="dark"
            styleOff="light"
            className="border"
          />
        </div>
      </div>
      <div className="row">
        <div className="col p-0">
          <pre>
            <code className="language-typescript">
              {`<BootstrapSwitchButton checked={true} styleOn="primary" />
<BootstrapSwitchButton checked={true} styleOn="secondary" />
<BootstrapSwitchButton checked={true} styleOn="success" />
<BootstrapSwitchButton checked={true} styleOn="danger" />
<BootstrapSwitchButton checked={true} styleOn="warning" />
<BootstrapSwitchButton checked={true} styleOn="info" />
<BootstrapSwitchButton checked={true} styleOn="light" styleOff="dark" className="border" />
<BootstrapSwitchButton checked={true} styleOn="dark" styleOff="light" className="border"/>`}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );

  let demosDarkOutlineColors: JSX.Element = (
    <div>
      <h3 className="text-secondary mt-4">Dark Theme Outline Colors</h3>
      <p>Standard outline colors look great on dark backgrounds.</p>
      <div className="row">
        <div className="col p-3 bg-dark border">
          <BootstrapSwitchButton
            checked={true}
            styleOn="outline-primary"
            styleOff="outline-secondary"
          />
          <BootstrapSwitchButton
            checked={true}
            styleOn="outline-secondary"
            styleOff="outline-success"
          />
          <BootstrapSwitchButton
            checked={true}
            styleOn="outline-success"
            styleOff="outline-danger"
          />
          <BootstrapSwitchButton
            checked={true}
            styleOn="outline-danger"
            styleOff="outline-warning"
          />
          <BootstrapSwitchButton
            checked={true}
            styleOn="outline-warning"
            styleOff="outline-info"
          />
          <BootstrapSwitchButton
            checked={true}
            styleOn="outline-info"
            styleOff="outline-primary"
          />
          <BootstrapSwitchButton
            checked={true}
            styleOn="outline-light"
            styleOff="outline-dark"
            className="border"
          />
          <BootstrapSwitchButton
            checked={true}
            styleOn="outline-dark"
            styleOff="outline-light"
            className="border"
          />
        </div>
      </div>
      <div className="row">
        <div className="col p-0">
          <pre>
            <code className="language-typescript">
              {`<BootstrapSwitchButton checked={true} styleOn="outline-primary" styleOff="outline-secondary"/>
<BootstrapSwitchButton checked={true} styleOn="outline-secondary" styleOff="outline-success"/>
<BootstrapSwitchButton checked={true} styleOn="outline-success" styleOff="outline-danger"/>
<BootstrapSwitchButton checked={true} styleOn="outline-danger" styleOff="outline-warning"/>
<BootstrapSwitchButton checked={true} styleOn="outline-warning" styleOff="outline-info"/>
<BootstrapSwitchButton checked={true} styleOn="outline-info" styleOff="outline-primary"/>
<BootstrapSwitchButton checked={true} styleOn="outline-light" styleOff="outline-dark" className="border" />
<BootstrapSwitchButton checked={true} styleOn="outline-dark" styleOff="outline-light" className="border"/>`}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );

  return (
    <section id="demos" className="container my-5">
      <h2>Demos</h2>
      <hr />
      {demosSizes}
      {demosCustomSizes}
      {demosColors}
      {demosOutlineColors}
      {demosDarkColors}
      {demosDarkOutlineColors}
    </section>
  );
};

ReactDOM.render(
  <AppMain compiler="TypeScript" framework="React" />,
  document.getElementById("root")
);
