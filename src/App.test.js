import { render, screen } from "@testing-library/react";
import { isValidInputTimeValue } from "@testing-library/user-event/dist/utils";
import { act } from "react-dom/test-utils";
import App from "./App";
import Viewer from "./Viewer";

const DEBUG = false;
const { incorrectInitStrategy } = require('./tests/incorrectInitStrategy');
const { minimalConfig } = require('./tests/minimalWorkingConfig');
const { spatialLayout } = require('./tests/spatialLayout');
const { dataSetLayout } = require('./tests/dataSetLayout');
const { spatialLayersLayout } = require('./tests/spatialLayersLayout');
const { statusLayout } = require('./tests/statusLayout');
const { heatmapLayout } = require('./tests/heatmapLayout');
const { scatterplotLayout } = require('./tests/scatterplotLayout');
const { cellSetExpressionLayout } = require('./tests/cellSetExpressionLayout');
const { expressionLevelsLayout } = require('./tests/expressionLevelsLayout');
const { cellSetsLayout } = require('./tests/cellSetsLayout');
const { histogramLayout } = require('./tests/histogramLayout');

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
  const { container } = render(<App />);
  expect(container.getElementsByClassName("loader-ring").length).toBe(1);
});

//ERROR TESTING

test("test viewer without config", () => {
  window.URL.createObjectURL = jest.fn();
  render(<Viewer />);
  const element = screen.getByText(
    /The dataset configuration could not be found/);
  expect(element).toBeInTheDocument();
});

test("test viewer with wrong version in config", () => {
  window.URL.createObjectURL = jest.fn();
  render(<Viewer config={{ version: "This.Is.An.Invalid.Version" }} />);
  const element = screen.getByText(/Unknown config version/);
  expect(element).toBeInTheDocument();
});

test("test viwer with wrong initStrategy in config", () => {
  window.URL.createObjectURL = jest.fn();
  render(<Viewer config={incorrectInitStrategy} />);
  const element = screen.getByText(/should be equal to one of the allowed values/i);
  expect(element).toBeInTheDocument();
});


//MINIMAL CONFIG TESTING

test("test minimal working config", () => {
  window.URL.createObjectURL = jest.fn();
  render(<Viewer config={minimalConfig} />);
  const element = screen.getByText(/this is a test component/);
  expect(element).toBeInTheDocument();
});


//LAYOUT COMPONENTS TESTING

test("test Spatial rendered", () => {
  window.URL.createObjectURL = jest.fn();
  render(<Viewer config={spatialLayout} />);
  const element = screen.getByText(/Spatial/i);
  expect(element).toBeInTheDocument();
});

test("test Data Set rendered", () => {
  window.URL.createObjectURL = jest.fn();
  render(<Viewer config={dataSetLayout} />);
  const element = screen.getByText(/Data Set/i);
  expect(element).toBeInTheDocument();
});

test("test Spatial Layers rendered", () => {
  window.URL.createObjectUrl = jest.fn();
  render(<Viewer config={spatialLayersLayout} />);
  const element = screen.getByText(/Spatial Layers/i);
  expect(element).toBeInTheDocument();
});

test("test Status rendered", () => {
  window.URL.createObjectUrl = jest.fn();
  render(<Viewer config={statusLayout} />);
  const element = screen.getByText(/Status/i);
  expect(element).toBeInTheDocument();
});

/*test("test Heatmap rendered", () => {
  //TO BE CONTINUED: Heatmap component causes issue with Inline Worker
  window.URL.createObjectUrl = jest.fn();
  render(<Viewer config={heatmapLayout} />);
  const heatmapElement = screen.getByText(/Heatmap/i);
  expect(heatmapElement).toBeInTheDocument();
});*/

test("test Scatterplot rendered", () => {
  window.URL.createObjectUrl = jest.fn();
  render(<Viewer config={scatterplotLayout} />);
  const element = screen.getByText(/Scatterplot/i);
  expect(element).toBeInTheDocument();
});

test("test Expression by Cell Set rendered", () => {
  window.URL.createObjectUrl = jest.fn();
  render(<Viewer config={cellSetExpressionLayout} />);
  const element = screen.getByText(/Expression by Cell Set/i);
  expect(element).toBeInTheDocument();
});

test("test Expression Levels rendered", () => {
  window.URL.createObjectUrl = jest.fn();
  render(<Viewer config={expressionLevelsLayout} />);
  const element = screen.getByText(/Expression Levels/i);
  expect(element).toBeInTheDocument();
});

test("test Cell Sets rendered", () => {
  window.URL.createObjectUrl = jest.fn();
  render(<Viewer config={cellSetsLayout} />);
  const element = screen.getByText(/Cell Sets/i);
  expect(element).toBeInTheDocument();
});

test("test Expression Histogram rendered", () => {
  window.URL.createObjectUrl = jest.fn();
  render(<Viewer config={histogramLayout} />);
  const element = screen.getByText(/Expression Histogram/i);
  expect(element).toBeInTheDocument();
});


//App.js Testing

test("test passing invalid json file", async () => {
  delete window.location;
  window.location = { search: '?config=http://example.com/doesnt_exist/config.json' };

  act(() => {
    render(<App />);
  })
  await new Promise((r) => setTimeout(r, 2000));
  const elements = screen.getAllByText(/Unable to fetch config file/i);
  const element = Array.isArray(elements) ? elements[0] : elements;
  expect(element).toBeInTheDocument();
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
//   const element = screen.getByText(/vitessce-app/i);
//   expect(element).toBeInTheDocument();
// });