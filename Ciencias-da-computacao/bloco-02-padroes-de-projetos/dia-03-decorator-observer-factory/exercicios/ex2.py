from abc import ABC, abstractmethod


class Task(ABC):
    @abstractmethod
    def run_task(self) -> None:
        pass


class Alarm:
    def __init__(self, user: str) -> None:
        self._user = user
        self.__tasks_system: list[Task] = list()

    def adding_task_system(self, task: Task) -> None:
        self.__tasks_system.append(task)

    def run_tasks(self) -> None:
        for system in self.__tasks_system:
            system.run_task()

    def awake(self):
        print("Som do alarme: Triiiiiiim, Triiiiiiim")
        self.run_tasks()


class TaskLights(Task):
    def __init__(self, alarm: Alarm) -> None:
        self.alarm = alarm
        self.alarm.adding_task_system(self)

    def run_task(self) -> None:
        print(f"Acendendo as Luzes, Bom dia {self.alarm._user}!!!")


class TaskCoffee(Task):
    def __init__(self, alarm: Alarm) -> None:
        self.alarm = alarm
        self.alarm.adding_task_system(self)

    def run_task(self) -> None:
        print("Preparando o Café")


class TaskComputerOn(Task):
    def __init__(self, alarm: Alarm) -> None:
        self.alarm = alarm
        self.alarm.adding_task_system(self)

    def run_task(self) -> None:
        print("Ligando o PC")


if __name__ == "__main__":
    alarm = Alarm("Julia")
    TaskLights(alarm)
    TaskCoffee(alarm)
    TaskComputerOn(alarm)

    alarm.awake()
