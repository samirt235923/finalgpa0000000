from pathlib import Path

root = Path(r'e:\samirapi\GPA Calculator')
output_file = root / 'temp_state_entries_output_utf8.txt'
calculator_file = root / 'src' / 'data' / 'calculators.ts'
template_file = root / 'src' / 'data' / 'schoolGpaPageContent.ts'

text = output_file.read_text(encoding='utf-8')
if 'CALCULATOR ENTRIES START' not in text or 'TEMPLATE ENTRIES START' not in text:
    raise SystemExit('Markers not found in generated output file')

calc_part = text.split('CALCULATOR ENTRIES START', 1)[1].split('CALCULATOR ENTRIES END', 1)[0].strip()
template_part = text.split('TEMPLATE ENTRIES START', 1)[1].split('TEMPLATE ENTRIES END', 1)[0].strip()

# Insert calculator entries into calculators.ts
calc_content = calculator_file.read_text(encoding='utf-8')
marker = '\n];\n\nexport default calculatorData;'
index = calc_content.rfind(marker)
if index == -1:
    raise SystemExit('Could not find insertion point in calculators.ts')
new_calc_content = calc_content[:index] + '\n' + calc_part + '\n' + calc_content[index:]
calculator_file.write_text(new_calc_content, encoding='utf-8')

# Insert template entries into schoolGpaPageContent.ts
template_content = template_file.read_text(encoding='utf-8')
marker = '\n];\n\nfunction createSchoolGpaPageContent'
index = template_content.find(marker)
if index == -1:
    raise SystemExit('Could not find insertion point in schoolGpaPageContent.ts')
new_template_content = template_content[:index] + '\n' + template_part + '\n' + template_content[index:]
template_file.write_text(new_template_content, encoding='utf-8')

print('Inserted state calculator entries into calculators.ts')
print('Inserted state template entries into schoolGpaPageContent.ts')
