import { PATHS } from "@/configs/paths.js";
import { LAYOUTS } from "@/configs/layouts.js";

import NotFound from "@pages/NotFound";
import TodoApp from "@pages/TodoApp";

export const ROUTES = [
  {
    layout: LAYOUTS.DEFAULT,
    children: [
      {
        path: PATHS.TODO_APP,
        title: "Todo app",
        element: TodoApp,
        isShowInNav: true,
      },
    ],
  },
  {
    layout: LAYOUTS.NO_LAYOUT,
    children: [
      {
        path: PATHS.NOT_FOUND,
        title: "Not Found",
        element: NotFound,
        isShowInNav: false,
      },
    ],
  },
];
