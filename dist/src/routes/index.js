"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    console.log('APIs start successfully');
    return res.json({
        error: false,
        message: 'Welcome'
    });
});
exports.default = router;
//# sourceMappingURL=index.js.map