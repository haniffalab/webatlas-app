import { render, screen, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import App from "./App";
import Viewer from "./Viewer";

const DEBUG = false;
const { incorrectInitStrategy } = require('./tests/incorrectInitStrategy');
const { minimalWorkingConfig } = require('./tests/minimalWorkingConfig');
const { scatterplotLayout } = require('./tests/scatterplotLayout');
const { heatmapLayout } = require('./tests/heatmapLayout');
const { spatialLayout } = require('./tests/spatialLayout');
const { layerControllerLayout } = require('./tests/layerControllerLayout');
const { featureListLayout } = require('./tests/featureListLayout');
const { obsSetsLayout } = require('./tests/obsSetsLayout');
const { descriptionLayout } = require('./tests/descriptionLayout');
const { statusLayout } = require('./tests/statusLayout');

beforeEach(() => {
  if (!DEBUG) {
    // hide console outputs if not in DEBUG mode
    jest.spyOn(console, "log").mockImplementation(() => { });
    jest.spyOn(console, "info").mockImplementation(() => { });
    jest.spyOn(console, "warn").mockImplementation(() => { });
  }
});

test("renders loader", () => {
  window.URL.createObjectURL = jest.fn();
  render(<App />);
  const element = screen.getByTestId('loader-ring');
  expect(element).toBeInTheDocument();
});

//ERROR TESTING

test("test viewer without config", () => {
  window.URL.createObjectURL = jest.fn();
  render(<Viewer />);
  //const element = screen.getByText(/The dataset configuration could not be found/);
  const element = screen.getByText(/Config version was not recognized/);
  expect(element).toBeInTheDocument();
});

test("test viewer with wrong version in config", () => {
  window.URL.createObjectURL = jest.fn();
  render(<Viewer config={{ version: "This.Is.An.Invalid.Version" }} />);
  //const element = screen.getByText(/Unknown config version/);
  const element = screen.getByText(/Config version was not recognized/);
  expect(element).toBeInTheDocument();
});

test("test viwer with wrong initStrategy in config", () => {
  window.URL.createObjectURL = jest.fn();
  render(<Viewer config={incorrectInitStrategy} />);
  //const element = screen.getByText(/should be equal to one of the allowed values/i);
  const element = screen.getByText(/invalid init strategy/);
  expect(element).toBeInTheDocument();
});

//MINIMAL CONFIG TESTING

test("test minimal working config", () => {
  window.URL.createObjectURL = jest.fn();
  render(<Viewer config={minimalWorkingConfig} />);
  const element = screen.getByText(/this is a test component/);
  expect(element).toBeInTheDocument();
});

//LAYOUT COMPONENTS TESTING

test("test scatterplot rendered", () => {
  window.URL.createObjectUrl = jest.fn();
  render(<Viewer config={scatterplotLayout} />);
  const element = screen.getByText(/Scatterplot/i);
  expect(element).toBeInTheDocument();
});

// test("test heatmap rendered", () => {
//   //TO BE CONTINUED: Heatmap component causes issue with Inline Worker
//   window.URL.createObjectUrl = jest.fn();
//   render(<Viewer config={heatmapLayout} />);
//   const heatmapElement = screen.getByText(/Heatmap/i);
//   expect(heatmapElement).toBeInTheDocument();
// });

test("test spatial rendered", () => {
  window.URL.createObjectURL = jest.fn();
  render(<Viewer config={spatialLayout} />);
  const element = screen.getByText(/Spatial/i);
  expect(element).toBeInTheDocument();
});

test("test layerController rendered", () => {
  window.URL.createObjectURL = jest.fn();
  render(<Viewer config={layerControllerLayout} />);
  const element = screen.getByText(/Spatial Layers/i);
  expect(element).toBeInTheDocument();
});

test("test featureList rendered", () => {
  window.URL.createObjectURL = jest.fn();
  render(<Viewer config={featureListLayout} />);
  const element = screen.getByText(/Gene List/i);
  expect(element).toBeInTheDocument();
});

test("test obsSets rendered", () => {
  window.URL.createObjectUrl = jest.fn();
  render(<Viewer config={obsSetsLayout} />);
  const element = screen.getByText(/Cell Sets/i);
  expect(element).toBeInTheDocument();
});

test("test description rendered", () => {
  window.URL.createObjectURL = jest.fn();
  render(<Viewer config={descriptionLayout} />);
  const element = screen.getByText(/Description/i);
  expect(element).toBeInTheDocument();
});

test("test status rendered", () => {
  window.URL.createObjectUrl = jest.fn();
  render(<Viewer config={statusLayout} />);
  const element = screen.getByText(/Status/i);
  expect(element).toBeInTheDocument();
});

//App.js Testing

test("test passing invalid json file", async () => {
  delete window.location;
  window.location = { search: '?config=config-that-does-not-exists.json' };
  act(() => {
    render(<App />);
  })
  await new Promise((r) => setTimeout(r, 2000));
  await waitFor(() => {
    const elements = screen.getAllByText(/Unable to fetch config file/i);
    const element = Array.isArray(elements) ? elements[0] : elements;
    expect(element).toBeInTheDocument()
  });
});

// test("test passing json file with syntax errors", async () => {
//   delete window.location;
//   window.location = { search: '?config=http://localhost:3000/config/tests/invalid_json.json' };
//   render(<App />);
//   await new Promise((r) => setTimeout(r, 2000));
//   const element = screen.getByText(/Error parsing JSON/i);
//   expect(element).toBeInTheDocument();
// });

// test("test passing json file not including version", async () => {
//   delete window.location;
//   window.location = { search: '?config=http://localhost:3000/config/tests/no_version.json' };
//   render(<App />);
//   await new Promise((r) => setTimeout(r, 2000));
//   const element = screen.getByText(/webatlas-app/i);
//   expect(element).toBeInTheDocument();
// });