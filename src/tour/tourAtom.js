import { atom, selector } from "recoil";

export const tourAtom = atom({
  key: "tour-atom",
  default: {
    key: new Date(), // This field makes the tour to re-render when we restart the tour
    run: true,
    loading: false,
    continuous: false,
    scrollToFirstStep: true,
    showProgress: true,
    showSkipButton: true,
    stepIndex: 0,
  },
});

const localStorageEffect =
  (key) =>
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue, _, isReset) => {
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newValue));
    });
  };

export const skipTourAtom = atom({
  key: "tour-run",
  default: false,
  effects: [localStorageEffect("skip-tour")],
});

export const tourMoveToStepSelector = selector({
  key: "tour-step-index-selector",
  get: ({ get }) => {
    const tourState = get(tourAtom);
    return tourState.stepIndex;
  },
  set: ({ set }, newStepIndex) => {
    set(tourAtom, (oldTourAtom) => ({
      ...oldTourAtom,
      run: true,
      stepIndex: newStepIndex,
      continuous: true,
    }));
  },
});
