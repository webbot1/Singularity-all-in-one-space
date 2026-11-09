# 🌌 Сингулярность / Singularity

[Русский](#русский) | [English](#english)

---

## Русский

**Сингулярность** — это универсальное cross-platform приложение «всё в одном» с гибким доступом для работы с данными, заметками, расчетами и чертежами. Программа объединяет текстовый редактор, урезанный Excel, SQL-движок, Канбан, ТРИЗ-модуль и CAD-систему.

### 🌐 Концепция и Доступность
* **Полный кроссплатформен:** Работает онлайн, как веб-офлайн (PWA приложение), а также в виде отдельных сборок с диска устройства (APK для Android и EXE для Windows). Внутри APK и EXE используются свои изолированные WEB-окружения (WebView).
* **Локальное хранение:** Все данные хранятся в `localStorage` вашего браузера или WebView. Полная приватность — никаких внешних серверов.
* **Автономность:** При первом запуске библиотека SQL кэшируется для работы офлайн. Дашборды и Лог работают офлайн «из коробки».
* **Перенос данных:** Файл базы данных легко переносится между устройствами любым удобным способом (например, через облако).

---

### 🛠️ Основные возможности

#### 1. Текстовые заметки & База знаний (Wiki)
* **Семантические связи:** Связывайте заметки по смыслу через Wiki-ссылки: `[[ссылка на другую заметку]]`.
* **Блочная структура:** Текст делится на блоки (абзацы). Нажмите на 6 точек слева от блока (или зажмите пальцем на телефоне), дождитесь подсветки и перетащите блок в нужное место.
* **Быстрое меню (`/` или `+`):** Нажмите `/` на ПК или кнопку `+` на телефоне в начале строки для вызова меню вставки блоков (таблицы, разделители, стили). Доступен быстрый поиск по меню.
* **Управление:** Кнопка **«+ Новая заметка»** на сайдбаре создает документ. Кнопка **«Удалить»** (с подтверждением) очищает заметки.
* **Экспорт:** Поддерживается выгрузка в форматы **Word** и **TXT**.

#### 2. Табличные заметки & Урезанный Excel
* **Управление строками и столбцами:** Копируйте/вставляйте строки через их номера слева. Столбцы управляются через меню фильтров (кнопка «Стрелочка» в заголовке).
* **Перенос данных (ПК):** Сделайте ввод в ячейке неактивным, зажмите ЛКМ на пустом месте ячейки и перетащите её содержимое в другую.
* **Формулы:** Поддерживаются формулы в стиле Excel. Заголовки столбцов соответствуют буквам (A, B, C...). Формулы пишутся поячеечно (без растягивания диапазонов), что идеально для быстрых расчетов.
* **Импорт/Экспорт Excel:** Поддерживается загрузка файлов `.xlsx` (первая строка обязательно должна быть заголовками) с сохранением и переносом формул.
* *Примечание:* Для обновления результатов формул и выравнивания ширины колонок после импорта нажмите на название заметки в сайдбаре.

#### 3. SQL-аналитика (SQLite движок)
* **Полноценный SQL:** К табличным заметкам можно применять SQL и сложные CTE-запросы.
* **Регистронезависимость для кириллицы:** Реализована кастомная функция `fold()` для обхода ограничений SQLite.
  * *Пример запроса:*
    ```sql
    SELECT s.Имя, s.Фамилия, w.Стаж 
    FROM Сотрудники s 
    LEFT JOIN "Опыт работы" w ON fold(s.Имя) = fold(w.Имя);
    ```
    *(Внимание: из-за внешнего обработчика функция fold() снижает скорость выполнения).*
* **Сохранение:** Запросы сохраняются вместе с базой данных. Результат можно экспортировать в новую табличную заметку или встроить таблицей в текстовую заметку.
* **OLAP-аналитика:** Кнопка **«Куб»** на сайдбаре открывает меню для построения OLAP-матриц на основе выбранных таблиц.

#### 4. Проекты, Логи и ТРИЗ
* **Канбан-доска:** Простая доска для контроля процессов, задач и фиксации важной информации.
* **Лог (Журнал действий):** Фиксирует все действия по времени (включая импорт). На оси времени строится **Диаграмма Ганта** от предыдущего события до текущего времени (красная черта). Лог можно выгружать.
* **Модуль ТРИЗ:** Инструмент для фиксации мыслительного процесса по АРИЗ и сохранения изобретательских идей. Требует понимания методологии ТРИЗ. Данные выводятся в Word, TXT или Excel (в файл общей базы при экспорте этот раздел не сохраняется).

#### 5. Чертежный модуль (Аналог AutoCAD R13)
* **Форматы:** Чертежи сохраняются/загружаются как координаты объектов в **JSON** или **DXF**. Экспорт доступен в **SVG** и **PNG** (с отступами в 2 единицы от рамки или крайних элементов).
* **Управление на ПК:** ПКМ — перемещение по холсту, ЛКМ — выделение объектов.
* **Управление на смартфоне:** Инструмент **«РАМКА»** переключает режим выделения или перемещения пальцем (допуск погрешности пальца 2.5 пункта).
* **Интерпретатор Автолиспа:** Позволяет описывать чертеж кодом (лисп-программой). Пример доступен по кнопке «Пример» в интерпретаторе. При замене команд (например, `PLINE` на `LINE`) результат чертежа изменится.
* **Свойства и Стили:** Функция **СВОЙ** изменяет свойства выделенной группы объектов. Функция **СТИЛЬ** задает стиль линии (для новых линий или для выделенной).

---
---

## English

**Singularity** is a universal, cross-platform, "all-in-one" application with flexible access modes for managing data, notes, calculations, and drawings. The program combines a text editor, a lightweight Excel alternative, an SQL engine, a Kanban board, a TRIZ module, and a CAD system.

### 🌐 Concept & Accessibility
* **True Cross-Platform:** Works online, web-offline (as a Progressive Web App - PWA), and natively from device storage (APK for Android, EXE for Windows). APK and EXE versions run in isolated web environments (WebView).
* **Local Storage:** All data is kept inside your browser's or WebView's `localStorage`. Complete privacy — no external servers.
* **Offline-First:** On the first launch, the SQL library is cached for offline use. Dashboards and Logs work offline out of the box.
* **Data Portability:** The database file can be transferred between devices using any preferred method (e.g., via cloud storage).

---

### 🛠️ Key Features

#### 1. Text Notes & Knowledge Base (Wiki)
* **Semantic Connections:** Connect notes using Wiki-links: `[[link to another note]]`.
* **Block-Based Structure:** Text is split into movable blocks. Click and hold the 6 dots on the left (or long-press on mobile) until highlighted, then drag and drop the block to rearrange.
* **Quick Insert Menu (`/` or `+`):** Type `/` on PC or press `+` on mobile at the start of a block to open the insertion menu (tables, dividers, styles). Features built-in search.
* **Management:** The **"+ New Note"** button on the sidebar creates documents. The red **"Delete"** button (with confirmation) deletes notes.
* **Export:** Supports exporting to **Word** and **TXT** files.

#### 2. Table Notes & Lightweight Excel
* **Row & Column Management:** Copy/paste rows by clicking row numbers on the left. Manage columns (copy, insert left/right, clear, delete) using the arrow menu in the column header.
* **Data Transfer (PC):** Deactivate cell text input, click and hold LMB on empty space inside the cell, and drag its content to another cell.
* **Formulas:** Excel-like formulas are supported. Column headers represent letters (A, B, C...). Formulas are applied per cell (no range stretching), which is optimal for quick, small-scale calculations.
* **Excel Import/Export:** Import `.xlsx` files (the first row must contain headers). Formulas are fully preserved during import/export.
* *Note:* To refresh formula results and auto-align column widths after importing, click the note's name in the sidebar.

#### 3. SQL Analytics (SQLite Engine)
* **Full-fledged SQL:** Apply SQL and complex CTE queries directly to table notes.
* **Cyrillic Case Insensitivity:** Features a custom `fold()` function to overcome standard SQLite limitations.
  * *Query Example:*
    ```sql
    SELECT s.Имя, s.Фамилия, w.Стаж 
    FROM Сотрудники s 
    LEFT JOIN "Опыт работы" w ON fold(s.Имя) = fold(w.Имя);
    ```
    *(Note: Using the fold() function impacts query execution speed due to external processing).*
* **Persistence:** Saved queries are stored within the database. Results can be saved as a new table note or inserted as a table block into a text note.
* **OLAP Analytics:** The **"Cube"** button in the sidebar opens the OLAP analytics menu to generate multidimensional matrices from selected tables.

#### 4. Projects, Logs, and TRIZ
* **Kanban Board:** A simple board to monitor workflows, track tasks, and pin important data.
* **Log (Action Journal):** Timestamps all actions (including data imports). A **Gantt Chart** is automatically plotted on the timeline from the previous event to the current time (marked by a red line). Logs can be exported.
* **TRIZ Module:** A workspace for structuring the thinking process via ARIZ algorithms and saving inventive ideas. Requires a prior understanding of TRIZ methodology. Data can be exported to Word, TXT, or Excel (not included in the main database backup).

#### 5. Drawing Module (Early AutoCAD R13 Paradigm)
* **Formats:** Drawings are saved and loaded as object coordinate sets in **JSON** or **DXF** formats. Exporting is available in **SVG** and **PNG** (with 2-unit margins from the border frame or outermost elements).
* **PC Controls:** RMB to pan across the canvas, LMB to select objects.
* **Mobile Controls:** The **"FRAME"** tool toggles between selection and finger panning (features a 2.5-point touch tolerance).
* **AutoLISP-like Interpreter:** Allows defining drawings using LISP-like programming code. A preset is available via the "Example" button. Changing commands (e.g., `PLINE` to `LINE`) yields different drawing results.
* **Properties & Styles:** The **PROPS** function modifies properties of a selected object group. The **STYLE** function sets line styles (applies to new lines or changes currently selected ones).

