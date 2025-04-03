import {Component, HostBinding, Input} from '@angular/core';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

//интерфейс данных дерева
interface treeDataNode {
  "id": number,
  "title": string,
  "is_deleted": boolean,
  "deleted_at"?: null | string,
  "children": treeDataNode[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [MatTreeModule, MatButtonModule, MatIconModule],
})

export class TreeComponent {
  dataSource = data;

  childrenAccessor = (node: treeDataNode) => node.children; //передача дочерних компонентов

  hasChild = (_: number, node: treeDataNode) => !!node.children && node.children.length > 0; //проверка на наличие дочерних компонентов
}

const data: treeDataNode[] = [
  {
    "id": 1,
    "title": "Значение 1",
    "is_deleted": false,
    "children": [
      {
        "id": 2,
        "title": "Значение 1.1",
        "is_deleted": false,
        "children": [
          {
            "id": 3,
            "title": "Значение 1.1.1",
            "is_deleted": true,
            "children": []
          }
        ]
      },
      {
        "id": 4,
        "title": "Значение 1.2",
        "is_deleted": false,
        "children": [
          {
            "id": 5,
            "title": "Значение 1.2.1",
            "is_deleted": false,
            "children": []
          },
          {
            "id": 6,
            "title": "Значение 1.2.2",
            "is_deleted": false,
            "children": []
          }
        ]
      }
    ]
  },
  {
    "id": 7,
    "title": "Значение 2",
    "is_deleted": false,
    "children": [
      {
        "id": 8,
        "title": "Значение 2.1",
        "is_deleted": true,
        "children": [
          {
            "id": 9,
            "title": "Значение 2.1.1",
            "is_deleted": true,
            "children": [
              {
                "id": 10,
                "title": "Значение 2.1.1.1",
                "is_deleted": true,
                "children": [
                  {
                    "id": 11,
                    "title": "Значение 2.1.1.1.1",
                    "is_deleted": true,
                    "children": [
                      {
                        "id": 12,
                        "title": "Значение 2.1.1.1.1.1",
                        "is_deleted": false,
                        "deleted_at": null,
                        "children": [
                          {
                            "id": 13,
                            "title": "Значение 2.1.1.1.1.1.1",
                            "is_deleted": false,
                            "children": []
                          }
                        ]
                      },
                      {
                        "id": 13,
                        "title": "Значение 2.1.1.1.1.2",
                        "is_deleted": false,
                        "children": []
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
    ]
  }
];