import { SPWidgetDependency } from '@servicenow/sdk/core'

SPWidgetDependency({
    $id: Now.ID['1d2c15244749c350f487c24fe16d43ed'],
    name: 'custom.min.js',
    angularModuleName: '',
    jsIncludes: [
        {
            order: 100,
            include: 'd63c95244749c350f487c24fe16d43ab',
        },
    ],
})
