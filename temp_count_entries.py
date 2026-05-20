from pathlib import Path
path = Path(r'e:\samirapi\GPA Calculator\src\data\calculators.ts')
text = path.read_text(encoding='utf-8')
for id in ['alabama-gpa-calculator', 'texas-college-gpa-calculator', 'wyoming-gpa-calculator']:
    print(id, text.count(f"'{id}'"))
