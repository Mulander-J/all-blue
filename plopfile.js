/** plopfile.js */

module.exports = function (plop) {
    plop.setGenerator('svelteComp', {
        description: 'svelte component',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'The name of the component'
        }],
        actions: [{
            type: 'add',
            path: 'src/stories/@reproduce/{{name}}/{{name}}.svelte',
            templateFile: 'plop-templates/comp.svelte.hbs'
        },{
            type: 'add',
            path: 'src/stories/@reproduce/{{name}}/index.stories.js',
            templateFile: 'plop-templates/stories.js.hbs'
        }]
    });

    plop.setGenerator('100days', {
        description: '100 days css challenge',
        prompts: [{
            type: 'input',
            name: 'day',
            message: 'The number of the day'
        },{
            type: 'input',
            name: 'short',
            message: 'The desc of the demo'
        }],
        actions: function(data) {
            if(!data?.day || !data?.short) throw Error('Empty input')
            let newData = data
            newData.fileIndex = String(data.day).padStart(3, '0');
            const strs = String(data.short).split(':')
            newData.title = strs[0].trim();
            newData.intro = strs[1].trim();
            return [{
                type: 'add',
                path: 'src/stories/@cssOnly/100days/{{fileIndex}}.mdx',
                templateFile: 'plop-templates/100days.hbs',
                data: newData
            }];
        }
    });
};
