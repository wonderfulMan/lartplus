var _0x3bca=['validate-npm-package-name','__importDefault','notice','__esModule','error','./notice','./exit','default','validateProjectName','warn','warnings','无效的命名，请遵循npm包命名规范\x20--\x20','errors'];(function(_0x4ec546,_0x3bcaa7){var _0x15e14b=function(_0x10332e){while(--_0x10332e){_0x4ec546['push'](_0x4ec546['shift']());}};_0x15e14b(++_0x3bcaa7);}(_0x3bca,0x1af));var _0x15e1=function(_0x4ec546,_0x3bcaa7){_0x4ec546=_0x4ec546-0x0;var _0x15e14b=_0x3bca[_0x4ec546];return _0x15e14b;};'use strict';var __importDefault=this&&this[_0x15e1('0xc')]||function(_0x13f611){return _0x13f611&&_0x13f611[_0x15e1('0x1')]?_0x13f611:{'default':_0x13f611};};exports[_0x15e1('0x1')]=!0x0;var validate_npm_package_name_1=__importDefault(require(_0x15e1('0xb'))),notice_1=require(_0x15e1('0x3')),exit_1=require(_0x15e1('0x4'));function validateProjectName(_0x150f36){var _0x4cd274=validate_npm_package_name_1[_0x15e1('0x5')](_0x150f36);_0x4cd274['validForNewPackages']||(notice_1[_0x15e1('0x0')]['error']([_0x15e1('0x9')+_0x150f36]),_0x4cd274[_0x15e1('0xa')]&&notice_1[_0x15e1('0x0')][_0x15e1('0x2')](_0x4cd274['errors']),_0x4cd274[_0x15e1('0x8')]&&notice_1[_0x15e1('0x0')][_0x15e1('0x7')](_0x4cd274[_0x15e1('0x8')]),exit_1['exit'](0x0));}exports[_0x15e1('0x6')]=validateProjectName;