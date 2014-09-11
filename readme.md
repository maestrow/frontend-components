# ng-codemirror-with-preview

[Angularjs](angularjs.org) UI Component representing codemirror editor with preview panel.

Данный проект - это порт редактора [htmleditor](http://getuikit.com/docs/addons_htmleditor.html) из библиотеки add-on'ов [uikit](http://getuikit.com/) без использования данной библиотеки.

Существует [ui-codemirror](https://github.com/angular-ui/ui-codemirror), однако этот компонент без панели предварительного просмотра.

## Этапы портирования редактора

В папке `additional` содержатся дополнительные примеры, относящиеся к редактору [codemirror](http://codemirror.net):

- `angular-ui-codemirror` - пример использования компонента [ui-codemirror](https://github.com/angular-ui/ui-codemirror)
- `uikit-htmleditor` - пример использования [htmleditor](http://getuikit.com/docs/addons_htmleditor.html)
- `codemirror-with-preview` - текстовый редактор с предпросмотром на основе [codemirror](http://codemirror.net). По сути это то, что в рамках данного проекта оформлено в виде компонента angularjs.

Запуск примеров

```
$ npm install -g http-server
$ cd ng-codemirror-with-preview\additional\<sample_folder>
$ bower install
$ http-server
```

## Запуск Demo

```
$ bower install
$ http-server
```

Перейти по адресу http://localhost:8080/demo/