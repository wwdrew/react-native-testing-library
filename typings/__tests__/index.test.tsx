/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import { ReactTestInstance } from 'react-test-renderer';
import {
  render,
  fireEvent,
  flushMicrotasksQueue,
  waitFor,
  act,
  within,
} from '../..';

interface HasRequiredProp {
  requiredProp: string;
}

const View = (props) => props.children;
const Text = (props) => props.children;
const TextInput = (props) => props.children;
const ElementWithRequiredProps = (props: HasRequiredProp) => (
  <Text>{props.requiredProp}</Text>
);

const TestComponent = () => (
  <View>
    <Text>Test component</Text>
    <TextInput placeholder="my placeholder" />
  </View>
);

const tree = render(<TestComponent />);

// getBy API
const getBy: ReactTestInstance[] = [
  tree.getByText('<View />'),
  tree.getByText(/View/g),
  tree.getByPlaceholder('my placeholder'),
  tree.getByPlaceholder(/placeholder/g),
  tree.getByDisplayValue('my value'),
  tree.getByDisplayValue(/value/g),
  tree.getByTestId('test-id'),
  tree.getByA11yLabel('label'),
  tree.getByA11yHint('label'),
  tree.getByA11yRole('button'),
  tree.getByA11yStates('selected'),
  tree.getByA11yStates(['selected']),
  tree.getByA11yState({ busy: true }),
  tree.getByA11yValue({ min: 10 }),
  tree.UNSAFE_getByType(View),
  tree.UNSAFE_getByType(ElementWithRequiredProps),
  tree.UNSAFE_getByProps({ value: 2 }),
];

const getAllBy: ReactTestInstance[][] = [
  tree.getAllByText('<View />'),
  tree.getAllByText(/Text/g),
  tree.getAllByPlaceholder('my placeholder'),
  tree.getAllByPlaceholder(/placeholder/g),
  tree.getAllByDisplayValue('my value'),
  tree.getAllByDisplayValue(/value/g),
  tree.getAllByTestId('test-id'),
  tree.getAllByA11yLabel('label'),
  tree.getAllByA11yHint('label'),
  tree.getAllByA11yRole('button'),
  tree.getAllByA11yStates('selected'),
  tree.getAllByA11yStates(['selected']),
  tree.getAllByA11yState({ busy: true }),
  tree.getAllByA11yValue({ min: 10 }),
  tree.UNSAFE_getAllByType(View),
  tree.UNSAFE_getAllByType(ElementWithRequiredProps),
  tree.UNSAFE_getAllByProps({ value: 2 }),
];

// queryBy API
const queryBy: Array<ReactTestInstance | null> = [
  tree.queryByText('View'),
  tree.queryByText(/View/g),
  tree.queryByPlaceholder('my placeholder'),
  tree.queryByPlaceholder(/placeholder/g),
  tree.queryByDisplayValue('my value'),
  tree.queryByDisplayValue(/value/g),
  tree.queryByTestId('test-id'),
  tree.queryByA11yHint('label'),
  tree.queryByA11yLabel('label'),
  tree.queryByA11yRole('button'),
  tree.queryByA11yStates('selected'),
  tree.queryByA11yStates(['selected']),
  tree.queryByA11yState({ busy: true }),
  tree.queryByA11yValue({ min: 10 }),
  tree.UNSAFE_queryByType(View),
  tree.UNSAFE_queryByType(ElementWithRequiredProps),
  tree.UNSAFE_queryByProps({ value: 2 }),
];

const queryAllBy: ReactTestInstance[][] = [
  tree.queryAllByText('View'),
  tree.queryAllByText(/View/g),
  tree.queryAllByPlaceholder('my placeholder'),
  tree.queryAllByPlaceholder(/placeholder/g),
  tree.queryAllByDisplayValue('my value'),
  tree.queryAllByDisplayValue(/value/g),
  tree.queryAllByTestId('test-id'),
  tree.queryAllByA11yLabel('label'),
  tree.queryAllByA11yHint('label'),
  tree.queryAllByA11yRole('button'),
  tree.queryAllByA11yStates('selected'),
  tree.queryAllByA11yStates(['selected']),
  tree.queryAllByA11yState({ busy: true }),
  tree.queryAllByA11yValue({ min: 10 }),
  tree.UNSAFE_queryAllByType(View),
  tree.UNSAFE_queryAllByType(ElementWithRequiredProps),
  tree.UNSAFE_queryAllByProps({ value: 2 }),
];

// findBy API
const findBy: Promise<ReactTestInstance>[] = [
  tree.findByText('View'),
  tree.findByText('View', { timeout: 10, interval: 10 }),
  tree.findByText(/View/g),
  tree.findByText(/View/g, { timeout: 10, interval: 5 }),
  tree.findByPlaceholder('my placeholder'),
  tree.findByPlaceholder('my placeholder', { timeout: 10, interval: 5 }),
  tree.findByPlaceholder(/placeholder/g),
  tree.findByPlaceholder(/placeholder/g, { timeout: 10, interval: 5 }),
  tree.findByDisplayValue('my value'),
  tree.findByDisplayValue('my value', { timeout: 10, interval: 10 }),
  tree.findByDisplayValue(/value/g),
  tree.findByDisplayValue(/value/g, { timeout: 10, interval: 10 }),
  tree.findByTestId('test-id'),
  tree.findByTestId('test-id', { timeout: 10, interval: 10 }),
  tree.findByA11yLabel('label'),
  tree.findByA11yLabel('label', { timeout: 10, interval: 10 }),
  tree.findByA11yHint('label'),
  tree.findByA11yHint('label', { timeout: 10, interval: 10 }),
  tree.findByA11yRole('button'),
  tree.findByA11yRole('button', { timeout: 10, interval: 10 }),
  tree.findByA11yState({ busy: true }),
  tree.findByA11yState({ busy: true }, { timeout: 10, interval: 10 }),
  tree.findByA11yValue({ min: 10 }),
  tree.findByA11yValue({ min: 10 }, { timeout: 10, interval: 10 }),
];

const findAllBy: Promise<ReactTestInstance[]>[] = [
  tree.findAllByText('View'),
  tree.findAllByText('View', { timeout: 10, interval: 10 }),
  tree.findAllByText(/View/g),
  tree.findAllByText(/View/g, { timeout: 10, interval: 5 }),
  tree.findAllByPlaceholder('my placeholder'),
  tree.findAllByPlaceholder('my placeholder', { timeout: 10, interval: 10 }),
  tree.findAllByPlaceholder(/placeholder/g),
  tree.findAllByPlaceholder(/placeholder/g, { timeout: 10, interval: 10 }),
  tree.findAllByDisplayValue('View'),
  tree.findAllByDisplayValue('View', { timeout: 10, interval: 10 }),
  tree.findAllByDisplayValue(/View/g),
  tree.findAllByDisplayValue(/View/g, { timeout: 10, interval: 10 }),
  tree.findAllByTestId('test-id'),
  tree.findAllByTestId('test-id', { timeout: 10, interval: 10 }),
  tree.findAllByA11yLabel('label'),
  tree.findAllByA11yLabel('label', { timeout: 10, interval: 10 }),
  tree.findAllByA11yHint('label'),
  tree.findAllByA11yHint('label', { timeout: 10, interval: 10 }),
  tree.findAllByA11yState({ busy: true }),
  tree.findAllByA11yState({ busy: true }, { timeout: 10, interval: 10 }),
  tree.findAllByA11yValue({ min: 10 }),
  tree.findAllByA11yValue({ min: 10 }, { timeout: 10, interval: 10 }),
];

// debug API
const debugFn = tree.debug();
const debugFnWithMessage = tree.debug('my message');

// update API
tree.update(<View />);
tree.rerender(<View />);
tree.unmount();

// fireEvent API
const element: ReactTestInstance = tree.getByText('text');
fireEvent(element, 'press');
fireEvent(element, 'press', 'data');
fireEvent(element, 'press', 'param1', 'param2');
fireEvent.press(element);
fireEvent.changeText(element, 'string');
fireEvent.scroll(element, 'eventData');

// waitFor API
const waitGetBy: Promise<ReactTestInstance>[] = [
  waitFor<ReactTestInstance>(() => tree.getByA11yLabel('label')),
  waitFor<ReactTestInstance>(() => tree.getByA11yLabel('label'), {
    timeout: 10,
  }),
  waitFor<ReactTestInstance>(() => tree.getByA11yLabel('label'), {
    timeout: 100,
    interval: 10,
  }),
];

const waitGetAllBy: Promise<ReactTestInstance[]>[] = [
  waitFor<ReactTestInstance[]>(() => tree.getAllByA11yLabel('label')),
  waitFor<ReactTestInstance[]>(() => tree.getAllByA11yLabel('label'), {
    timeout: 10,
  }),
  waitFor<ReactTestInstance[]>(() => tree.getAllByA11yLabel('label'), {
    timeout: 100,
    interval: 10,
  }),
];

const waitForFlush: Promise<any> = flushMicrotasksQueue();

// act API
act(() => {
  render(<TestComponent />);
});

// within API
const instance: ReactTestInstance = tree.getByText('<View />');

const withinGet: Array<ReactTestInstance> = [
  within(instance).getByText('Test'),
  within(instance).getByDisplayValue('Test'),
  within(instance).getByPlaceholder('Test'),
  within(instance).getByTestId('Test'),
  within(instance).getByA11yLabel('Test'),
  within(instance).getByA11yHint('Test'),
  within(instance).getByA11yRole('button'),
  within(instance).getByA11yState({ busy: true }),
  within(instance).getByA11yValue({ min: 10 }),
];

const withinGetAll: Array<ReactTestInstance[]> = [
  within(instance).getAllByText('Test'),
  within(instance).getAllByDisplayValue('Test'),
  within(instance).getAllByPlaceholder('Test'),
  within(instance).getAllByTestId('Test'),
  within(instance).getAllByA11yLabel('Test'),
  within(instance).getAllByA11yHint('Test'),
  within(instance).getAllByA11yRole('button'),
  within(instance).getAllByA11yState({ busy: true }),
  within(instance).getAllByA11yValue({ min: 10 }),
];

const withinQuery: Array<ReactTestInstance | null> = [
  within(instance).queryByText('Test'),
  within(instance).queryByDisplayValue('Test'),
  within(instance).queryByPlaceholder('Test'),
  within(instance).queryByTestId('Test'),
  within(instance).queryByA11yLabel('Test'),
  within(instance).queryByA11yHint('Test'),
  within(instance).queryByA11yRole('button'),
  within(instance).queryByA11yState({ busy: true }),
  within(instance).queryByA11yValue({ min: 10 }),
];

const withinQueryAll: Array<ReactTestInstance[]> = [
  within(instance).queryAllByText('Test'),
  within(instance).queryAllByDisplayValue('Test'),
  within(instance).queryAllByPlaceholder('Test'),
  within(instance).queryAllByTestId('Test'),
  within(instance).queryAllByA11yLabel('Test'),
  within(instance).queryAllByA11yHint('Test'),
  within(instance).queryAllByA11yRole('button'),
  within(instance).queryAllByA11yState({ busy: true }),
  within(instance).queryAllByA11yValue({ min: 10 }),
];

const withinFind: Promise<ReactTestInstance>[] = [
  within(instance).findByText('Test'),
  within(instance).findByDisplayValue('Test'),
  within(instance).findByPlaceholder('Test'),
  within(instance).findByTestId('Test'),
  within(instance).findByA11yLabel('Test'),
  within(instance).findByA11yHint('Test'),
  within(instance).findByA11yRole('button'),
  within(instance).findByA11yState({ busy: true }),
  within(instance).findByA11yValue({ min: 10 }),
];

const withinFindAll: Promise<ReactTestInstance[]>[] = [
  within(instance).findAllByText('Test'),
  within(instance).findAllByDisplayValue('Test'),
  within(instance).findAllByPlaceholder('Test'),
  within(instance).findAllByTestId('Test'),
  within(instance).findAllByA11yLabel('Test'),
  within(instance).findAllByA11yHint('Test'),
  within(instance).findAllByA11yRole('button'),
  within(instance).findAllByA11yState({ busy: true }),
  within(instance).findAllByA11yValue({ min: 10 }),
];
