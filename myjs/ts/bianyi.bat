for /R %CD% %%s in (*.ts) do ( 
tsc  --target "ES5" %%s 
)
for /R %CD% %%s in (*.js) do ( 
copy  %%s ../
)  