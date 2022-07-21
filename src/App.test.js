import { render, screen } from "@testing-library/react";
import { isValidInputTimeValue } from "@testing-library/user-event/dist/utils";
import App from "./App";
import Viewer from "./Viewer";

const DEBUG = false;
const {incorrectInitStrategy} = require('./tests/incorrectInitStrategy');
const {minimalConfig} = require('./tests/minimalWorkingConfig');
const {spatialLayout} = require('./tests/spatialLayout');
const {dataSetLayout} = require('./tests/dataSetLayout');
const {spatialLayersLayout} = require('./tests/spatialLayersLayout');
const {statusLayout} = require('./tests/statusLayout');
const {heatmapLayout} = require('./tests/heatmapLayout');
const {scatterplotLayout} = require('./tests/scatterplotLayout');
const {cellSetExpressionLayout} = require('./tests/cellSetExpressionLayout');
const {expressionLevelsLayout} = require('./tests/expressionLevelsLayout');
const {cellSetsLayout} = require('./tests/cellSetsLayout');
const {histogramLayout} = require('./tests/histogramLayout');

beforeEach(() => {
  if (!DEBUG) {
    // hide console outputs if not in DEBUG mode
    jest.spyOn(console, "log").mockImplementation(() => {});
    jest.spyOn(console, "info").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  }
});

test("renders loading text", () => {
  window.URL.createObjectURL = jest.fn();
  render(<App />);
  const loadElement = screen.getByText(/Loading.../i);
  expect(loadElement).toBeInTheDocument();
});

//ERROR TESTING

test("test viewer without config", () => {
  window.URL.createObjectURL = jest.fn();
  render(<Viewer />);
  const errorElement = screen.getByText(
    /The dataset configuration could not be found/);
  expect(errorElement).toBeInTheDocument();
});

test("test viewer with wrong version in config", () => {
  window.URL.createObjectURL = jest.fn();
  render(<Viewer config={{ version: "This.Is.An.Invalid.Version" }} />);
  const errorElement = screen.getByText(/Unknown config version/);
  expect(errorElement).toBeInTheDocument();
});

test("test viwer with wrong initStrategy in config", () => {
  window.URL.createObjectURL = jest.fn();
  render(<Viewer config={incorrectInitStrategy} />);
  const errorElement = screen.getByText(/should be equal to one of the allowed values/i);
  expect(errorElement).toBeInTheDocument();
});


//MINIMAL CONFIG TESTING

test("test minimal working config", () => {
  window.URL.createObjectURL = jest.fn();
  render(<Viewer config={minimalConfig} />);
  const linkElement = screen.getByText(/this is a test component/);
  expect(linkElement).toBeInTheDocument();
});


//LAYOUT COMPONENTS TESTING

test("test Spatial rendered", () => {
  window.URL.createObjectURL = jest.fn();
  const page = render(<Viewer config={spatialLayout} />);
  console.log(page);
  const spatialElement = screen.getByText(/Spatial/i);
  expect(spatialElement).toBeInTheDocument();
});

test("test Data Set rendered", () => {
    console.log(JSON.stringify(dataSetLayout));
  window.URL.createObjectURL = jest.fn();
  render(<Viewer config={dataSetLayout} />);
  const dataElement = screen.getByText(/Data Set/i);
  expect(dataElement).toBeInTheDocument();
});

 test("test Spatial Layers rendered", () => {
  window.URL.createObjectUrl = jest.fn();
  render(<Viewer config={spatialLayersLayout} />);
  const layersElement = screen.getByText(/Spatial Layers/i);
  expect(layersElement).toBeInTheDocument();
});

test("test Status rendered", () => {
  window.URL.createObjectUrl = jest.fn();
  render(<Viewer config={statusLayout} />);
  const statusElement = screen.getByText(/Status/i);
  expect(statusElement).toBeInTheDocument();
});

/*test("test Heatmap rendered", () => {
  //TO BE CONTINUED: Heatmap component causes issue with Inline Worker
  // --> js file or inline makes no difference :(
  window.URL.createObjectUrl = jest.fn();
  render(<Viewer config={heatmapLayout} />);
  const heatmapElement = screen.getByText(/Heatmap/i);
  expect(heatmapElement).toBeInTheDocument();
});*/

test("test Scatterplot rendered", () => {
  window.URL.createObjectUrl = jest.fn();
  render(<Viewer config={scatterplotLayout} />);
  const scatterElement = screen.getByText(/Scatterplot/i);
  expect(scatterElement).toBeInTheDocument();
});

test("Expression by Cell Set rendered", () => {
  window.URL.createObjectUrl = jest.fn();
  render(<Viewer config={cellSetExpressionLayout} />);
  const cellElement = screen.getByText(/Expression by Cell Set/i);
  expect(cellElement).toBeInTheDocument();
});

test("Expression Levels rendered", () => {
  window.URL.createObjectUrl = jest.fn();
  render(<Viewer config={expressionLevelsLayout} />);
  const expressionElement = screen.getByText(/Expression Levels/i);
  expect(expressionElement).toBeInTheDocument();
});

test("Cell Sets rendered", () => {
  window.URL.createObjectUrl = jest.fn();
  render(<Viewer config={cellSetsLayout} />);
  const cellElement = screen.getByText(/Cell Sets/i);
  expect(cellElement).toBeInTheDocument();
});

test("Expression Histogram rendered", () => {
  window.URL.createObjectUrl = jest.fn();
  render(<Viewer config={histogramLayout} />);
  const histogramElement = screen.getByText(/Expression Histogram/i);
  expect(histogramElement).toBeInTheDocument();
});