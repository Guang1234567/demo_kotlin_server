<#-- @ftlvariable name="data" type="sample.model.IndexData" -->
<html>
<head>
    <link rel="stylesheet" href="/static/styles.css">
</head>
<body>
<ul>
    <#list data.items as item>
        <li>${item}</li>
    </#list>
</ul>
</body>
</html>