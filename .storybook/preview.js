import { MemoryRouter } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/styles/index.css'


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <MemoryRouter>
      <div style={{ padding: '3em', backgroundColor: 'white' }}>
        <Story />
      </div>
    </MemoryRouter>
  ),
];