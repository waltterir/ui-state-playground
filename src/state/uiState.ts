export type UiStatus =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: number }
  | { status: "error"; message: string };

export type UiAction =
  | { type: "submit" }
  | { type: "success"; payload: number }
  | { type: "fail"; error: string }
  | { type: "reset" };

export function uiReducer(state: UiStatus, action: UiAction): UiStatus {
  switch (action.type) {
    case "submit":
      return { status: "loading" };
    case "success":
      return { status: "success", data: action.payload };
    case "fail":
      return { status: "error", message: action.error };
    case "reset":
      return { status: "idle" };
    default:
      return state;
  }
}
