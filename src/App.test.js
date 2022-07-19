import { render, screen } from "@testing-library/react";
import App from "./App";
import Viewer from "./Viewer";

const DEBUG = false;

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
  const linkElement = screen.getByText(/Loading.../i);
  expect(linkElement).toBeInTheDocument();
});

test("test viewer without config", () => {
  window.URL.createObjectURL = jest.fn();
  render(<Viewer />);
  const linkElement = screen.getByText(
    /The dataset configuration could not be found/);
  expect(linkElement).toBeInTheDocument();
});

test("test viwer with wrong version in config", () => {
  window.URL.createObjectURL = jest.fn();
  render(<Viewer config={{ version: "This.Is.An.Invalid.Version" }} />);
  const linkElement = screen.getByText(/Unknown config version/);
  expect(linkElement).toBeInTheDocument();
});

test("test minimal working config", () => {
  const minimalConfig = {
    version: "1.0.0",
    datasets: [],
    description: "test",
    name: "test",
    initStrategy: "auto",
    layout: [
      {
        component: "description",
        props: { description: "this is a test component" },
        x: 0,
        y: 0,
      },
    ],
  };
  window.URL.createObjectURL = jest.fn();
  render(<Viewer config={minimalConfig} />);
  const linkElement = screen.getByText(/this is a test component/);
  expect(linkElement).toBeInTheDocument();
});

test("test minimal ISS config", () => {
  const iisConfig = {
    name: "ISS",
    version: "1.0.0",
    description: "",
    datasets: [
      {
        uid: "ISS",
        name: "ISS",
        description: "ISS",
        files: [
          {
            type: "raster",
            fileType: "raster.json",
            options: {
              renderLayers: ["Cells Segmentations"],
              schemaVersion: "0.0.2",
              images: [
                {
                  name: "Cells Segmentations",
                  url: "https://a04fcc815aa920b9c7e028bb79f7c2db29d0682c.cog.sanger.ac.uk/39bfafda600ff69122887bce04f4efb88f767caa/various_label_formats/out_opt_flow_registered_label_expanded_0.2.6",
                  type: "zarr",
                  metadata: { isBitmask: true, isPyramid: true },
                },
              ],
            },
          },
        ],
      },
    ],
    initStrategy: "auto",
    layout: [{ component: "spatial", x: 0, y: 0 }],
  };

  window.URL.createObjectURL = jest.fn();
  render(<Viewer config={iisConfig} />);
  const linkElement = screen.getByText(/Spatial/i);
  expect(linkElement).toBeInTheDocument();
});
